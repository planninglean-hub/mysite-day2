import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import generateVoiceHandler from './api/generate-voice.js'

function apiDevMiddleware() {
  return {
    name: 'api-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/generate-voice', async (req, res) => {
        try {
          await generateVoiceHandler(req, res)
        } catch (err) {
          console.error(err)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'dev 서버에서 API 처리 중 오류가 발생했어요.' }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  // GEMINI_API_KEY는 VITE_ 접두사가 없어 클라이언트에 노출되지 않는다.
  // dev 서버(api-dev-middleware)에서 process.env로 읽을 수 있도록 여기서만 로드한다.
  const env = loadEnv(mode, process.cwd(), '')
  if (env.GEMINI_API_KEY) process.env.GEMINI_API_KEY = env.GEMINI_API_KEY

  return {
    plugins: [react(), apiDevMiddleware()],
  }
})
