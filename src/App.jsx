import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import HeroBanner from './components/HeroBanner/HeroBanner'
import VoiceListPage from './pages/VoiceListPage/VoiceListPage'
import VoiceNewPage from './pages/VoiceNewPage/VoiceNewPage'
import VoiceEditPage from './pages/VoiceEditPage/VoiceEditPage'
import VoiceDetailPage from './pages/VoiceDetailPage/VoiceDetailPage'
import AuthGatePage from './pages/AuthGatePage/AuthGatePage'
import AuthCallbackPage from './pages/AuthCallbackPage/AuthCallbackPage'
import MyPage from './pages/MyPage/MyPage'
import AdminPage from './pages/AdminPage/AdminPage'
import { fetchVoices, createVoice, updateVoice, updateVoiceStatus, deleteVoice } from './lib/voicesApi'
import { fetchCategories, addCategory, deleteCategory } from './lib/categoriesApi'

export default function App() {
  const [voices, setVoices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchVoices()
      .then(setVoices)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
    fetchCategories().then(setCategories)
  }, [])

  async function handleAddCategory(name) {
    await addCategory(name)
    setCategories((prev) => [...prev, name])
  }

  async function handleDeleteCategory(name) {
    await deleteCategory(name)
    setCategories((prev) => prev.filter((c) => c !== name))
  }

  async function handleCreateVoice(payload) {
    const voice = await createVoice(payload)
    setVoices((prev) => [voice, ...prev])
    return voice
  }

  async function handleUpdateVoice(id, payload) {
    const voice = await updateVoice(id, payload)
    setVoices((prev) => prev.map((v) => (v.id === id ? voice : v)))
    return voice
  }

  async function handleUpdateVoiceStatus(id, status) {
    const voice = await updateVoiceStatus(id, status)
    setVoices((prev) => prev.map((v) => (v.id === id ? voice : v)))
    return voice
  }

  async function handleDeleteVoice(id) {
    await deleteVoice(id)
    setVoices((prev) => prev.filter((v) => v.id !== id))
  }

  const homePage = (
    <>
      <HeroBanner voices={voices} loading={loading} />
      <VoiceListPage voices={voices} loading={loading} error={error} categories={categories} />
    </>
  )

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={homePage} />
        <Route path="/voices" element={homePage} />
        <Route
          path="/voices/new"
          element={<VoiceNewPage onCreate={handleCreateVoice} categories={categories} />}
        />
        <Route
          path="/voices/:id"
          element={<VoiceDetailPage voices={voices} loading={loading} />}
        />
        <Route
          path="/voices/:id/edit"
          element={
            <VoiceEditPage
              voices={voices}
              loading={loading}
              onUpdate={handleUpdateVoice}
              categories={categories}
            />
          }
        />
        <Route path="/login" element={<AuthGatePage mode="login" />} />
        <Route path="/signup" element={<AuthGatePage mode="signup" />} />
        <Route path="/auth/callback" element={<AuthCallbackPage />} />
        <Route
          path="/mypage"
          element={<MyPage voices={voices} loading={loading} onDelete={handleDeleteVoice} />}
        />
        <Route
          path="/admin"
          element={
            <AdminPage
              voices={voices}
              loading={loading}
              categories={categories}
              onUpdateStatus={handleUpdateVoiceStatus}
              onDelete={handleDeleteVoice}
              onAddCategory={handleAddCategory}
              onDeleteCategory={handleDeleteCategory}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
