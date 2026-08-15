import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import VoiceListPage from './pages/VoiceListPage/VoiceListPage'
import VoiceNewPage from './pages/VoiceNewPage/VoiceNewPage'
import VoiceDetailPage from './pages/VoiceDetailPage/VoiceDetailPage'
import { initialVoices } from './data/mockVoices'

export default function App() {
  const [voices, setVoices] = useState(initialVoices)

  function handleCreateVoice(voice) {
    setVoices((prev) => [voice, ...prev])
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/voices" replace />} />
      <Route path="/voices" element={<VoiceListPage voices={voices} />} />
      <Route path="/voices/new" element={<VoiceNewPage onCreate={handleCreateVoice} />} />
      <Route path="/voices/:id" element={<VoiceDetailPage voices={voices} />} />
      <Route path="*" element={<Navigate to="/voices" replace />} />
    </Routes>
  )
}
