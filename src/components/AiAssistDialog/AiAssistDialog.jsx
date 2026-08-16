import { useState } from 'react'
import { IconX } from '@tabler/icons-react'
import TextAreaField from '../TextAreaField/TextAreaField'
import { generateVoiceDraft } from '../../lib/aiApi'
import styles from './AiAssistDialog.module.css'

export default function AiAssistDialog({ open, categories = [], onApply, onClose }) {
  const [draft, setDraft] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  if (!open) return null

  function handleClose() {
    if (loading) return
    setDraft('')
    setError(null)
    onClose()
  }

  async function handleGenerate() {
    if (!draft.trim()) return
    setLoading(true)
    setError(null)
    try {
      const result = await generateVoiceDraft({ draft, categories })
      onApply(result)
      setDraft('')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.overlay} role="presentation" onClick={handleClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="AI 작성도우미"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>AI 작성도우미</h2>
          <button type="button" className={styles.closeButton} onClick={handleClose} aria-label="닫기">
            <IconX size={20} />
          </button>
        </div>
        <p className={styles.description}>
          하고 싶은 말을 짧게 적으면 AI가 제목·본문·분야를 정리해드려요.
        </p>
        <TextAreaField
          value={draft}
          onChange={setDraft}
          placeholder="예: 놀이터 그네가 고장났어요, 빨리 고쳐졌으면 좋겠어요"
        />
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.actions}>
          <button type="button" className={styles.cancel} onClick={handleClose} disabled={loading}>
            취소
          </button>
          <button
            type="button"
            className={styles.confirm}
            onClick={handleGenerate}
            disabled={loading || !draft.trim()}
          >
            {loading ? '작성 중...' : '초안 만들기'}
          </button>
        </div>
      </div>
    </div>
  )
}
