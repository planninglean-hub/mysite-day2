import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HeroBanner from './components/HeroBanner/HeroBanner'
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

  const homePage = (
    <>
      <HeroBanner />
      <VoiceListPage voices={voices} loading={loading} error={error} />
    </>
  )

  return (
    <Routes>
      <Route path="/" element={homePage} />
      <Route path="/voices" element={homePage} />
      <Route path="/voices/new" element={<VoiceNewPage onCreate={handleCreateVoice} />} />
      <Route
        path="/voices/:id"
        element={<VoiceDetailPage voices={voices} loading={loading} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
