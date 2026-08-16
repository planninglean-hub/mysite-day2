const GEMINI_MODEL = 'gemini-3.5-flash-lite'

async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') return req.body ? JSON.parse(req.body) : {}

  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const raw = Buffer.concat(chunks).toString('utf8')
  return raw ? JSON.parse(raw) : {}
}

function sendJson(res, status, payload) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(payload))
}

function buildPrompt(draft, categories) {
  return [
    '너는 "위스테이별내 사회적협동조합" 아파트 공동체 커뮤니티 앱의 민원/의견 게시판 작성 도우미야.',
    '입주민이 짧게 적은 메모를 정식 민원(의견) 게시글로 다듬어줘.',
    '',
    '규칙:',
    '- 존댓말을 쓰고, 원래 내용에 없는 사실을 지어내거나 과장하지 마.',
    '- 제목은 20자 내외로 핵심을 요약해.',
    '- 본문은 상황 설명과 바라는 점이 드러나는 자연스러운 문단으로 정리해.',
    categories.length > 0
      ? `- category는 반드시 다음 중 하나를 그대로 골라: ${categories.join(', ')}`
      : '- category는 내용에 가장 어울리는 분야명을 한 단어로 정해.',
    '',
    `입주민이 적은 내용: ${draft}`,
  ].join('\n')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'POST 요청만 지원합니다.' })
    return
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    sendJson(res, 500, { error: '서버에 GEMINI_API_KEY가 설정되어 있지 않아요.' })
    return
  }

  let body
  try {
    body = await readJsonBody(req)
  } catch {
    sendJson(res, 400, { error: '요청 형식이 올바르지 않아요.' })
    return
  }

  const draft = typeof body.draft === 'string' ? body.draft.trim() : ''
  const categories = Array.isArray(body.categories)
    ? body.categories.filter((c) => typeof c === 'string' && c)
    : []

  if (!draft) {
    sendJson(res, 400, { error: '변환할 내용을 입력해주세요.' })
    return
  }

  const schema = {
    type: 'OBJECT',
    properties: {
      title: { type: 'STRING' },
      body: { type: 'STRING' },
      category: categories.length > 0 ? { type: 'STRING', enum: categories } : { type: 'STRING' },
    },
    required: ['title', 'body', 'category'],
  }

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 20000)

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: buildPrompt(draft, categories) }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: schema,
          },
        }),
      },
    )
    clearTimeout(timeout)

    if (!response.ok) {
      const errText = await response.text().catch(() => '')
      console.error('Gemini API error', response.status, errText)
      if (response.status === 429) {
        sendJson(res, 429, { error: 'AI 사용량이 많아 잠시 후 다시 시도해주세요.' })
        return
      }
      sendJson(res, 502, { error: 'AI 초안 생성 중 문제가 발생했어요.' })
      return
    }

    const data = await response.json()
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
    if (!text) {
      console.error('Gemini API response missing text', JSON.stringify(data))
      sendJson(res, 502, { error: 'AI 응답을 해석하지 못했어요.' })
      return
    }

    const result = JSON.parse(text)
    if (!result.title || !result.body || !result.category) {
      sendJson(res, 502, { error: 'AI 응답이 완전하지 않아요.' })
      return
    }

    sendJson(res, 200, {
      title: String(result.title).trim(),
      body: String(result.body).trim(),
      category: String(result.category).trim(),
    })
  } catch (err) {
    console.error('generate-voice handler error', err)
    sendJson(res, 500, { error: 'AI 초안 생성 중 오류가 발생했어요.' })
  }
}
