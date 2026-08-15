import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import VoiceListPage from './pages/VoiceListPage/VoiceListPage'
import VoiceNewPage from './pages/VoiceNewPage/VoiceNewPage'
import VoiceDetailPage from './pages/VoiceDetailPage/VoiceDetailPage'
import { fetchVoices, createVoice } from './lib/voicesApi'

export default function App() {
  const [voices, setVoices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchVoices()
      .then(setVoices)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  async function handleCreateVoice(payload) {
    const voice = await createVoice(payload)
    setVoices((prev) => [voice, ...prev])
    return voice
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/voices" replace />} />
      <Route
        path="/voices"
        element={<VoiceListPage voices={voices} loading={loading} error={error} />}
      />
      <Route path="/voices/new" element={<VoiceNewPage onCreate={handleCreateVoice} />} />
      <Route
        path="/voices/:id"
        element={<VoiceDetailPage voices={voices} loading={loading} />}
      />
      <Route path="*" element={<Navigate to="/voices" replace />} />
    </Routes>
  )
}
