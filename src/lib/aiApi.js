export async function generateVoiceDraft({ draft, categories = [] }) {
  const res = await fetch('/api/generate-voice', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ draft, categories }),
  })

  const data = await res.json().catch(() => null)
  if (!res.ok) {
    throw new Error(data?.error ?? 'AI 초안 생성에 실패했어요.')
  }
  return data
}
