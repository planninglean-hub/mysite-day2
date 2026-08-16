import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import PageContainer from '../../components/PageContainer/PageContainer'
import TextField from '../../components/TextField/TextField'
import TextAreaField from '../../components/TextAreaField/TextAreaField'
import CategoryChip from '../../components/CategoryChip/CategoryChip'
import PhotoUploadField from '../../components/PhotoUploadField/PhotoUploadField'
import Button from '../../components/Button/Button'
import { CATEGORIES } from '../../data/categories'
import { uploadPhoto } from '../../lib/voicesApi'
import { useAuth } from '../../context/AuthContext'
import styles from '../VoiceNewPage/VoiceNewPage.module.css'

export default function VoiceEditPage({ voices, loading, onUpdate }) {
  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const voice = voices.find((v) => v.id === id)

  const [title, setTitle] = useState(voice?.title ?? '')
  const [body, setBody] = useState(voice?.body ?? '')
  const [category, setCategory] = useState(voice?.category ?? CATEGORIES[0])
  const [photo, setPhoto] = useState(voice?.photo ? { id: voice.photo.id, url: voice.photo.url } : null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (!voice) {
    return (
      <PageContainer maxWidth="narrow">
        <div className={styles.page}>
          <p>{loading ? '불러오는 중...' : '글을 찾을 수 없어요.'}</p>
        </div>
      </PageContainer>
    )
  }

  if (voice.userId !== user.id) {
    return <Navigate to="/mypage" replace />
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const photoUrl = photo?.file ? await uploadPhoto(photo.file) : (photo?.url ?? null)
      await onUpdate(voice.id, { title, body, category, photoUrl })
      navigate(`/voices/${voice.id}`)
    } catch (err) {
      setError(err.message)
      setSubmitting(false)
    }
  }

  return (
    <PageContainer maxWidth="narrow">
      <div className={styles.page}>
        <h1 className="text-headline-lg">의견 수정</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            label="제목"
            value={title}
            onChange={setTitle}
            placeholder="제목을 입력하세요"
            required
          />
          <TextAreaField
            label="내용"
            value={body}
            onChange={setBody}
            placeholder="이웃들과 나누고 싶은 이야기를 자유롭게 적어주세요"
            required
          />
          <div>
            <span className={styles.label}>분야</span>
            <div className={styles.categoryRow}>
              {CATEGORIES.map((c) => (
                <CategoryChip
                  key={c}
                  label={c}
                  selected={category === c}
                  onClick={() => setCategory(c)}
                />
              ))}
            </div>
          </div>
          <div>
            <span className={styles.label}>사진 첨부 (1장)</span>
            <PhotoUploadField photo={photo} onChange={setPhoto} />
          </div>
          {error && <p className={styles.error}>수정에 실패했어요: {error}</p>}
          <div className={styles.actions}>
            <Button variant="secondary" to={`/voices/${voice.id}`}>
              취소
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? '저장 중...' : '저장하기'}
            </Button>
          </div>
        </form>
      </div>
    </PageContainer>
  )
}
