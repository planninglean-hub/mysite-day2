import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageContainer from '../../components/PageContainer/PageContainer'
import TextField from '../../components/TextField/TextField'
import TextAreaField from '../../components/TextAreaField/TextAreaField'
import CategoryChip from '../../components/CategoryChip/CategoryChip'
import PhotoUploadField from '../../components/PhotoUploadField/PhotoUploadField'
import Button from '../../components/Button/Button'
import { CATEGORIES, buildNewVoice } from '../../data/mockVoices'
import styles from './VoiceNewPage.module.css'

export default function VoiceNewPage({ onCreate }) {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [photos, setPhotos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    const voice = buildNewVoice({ title, body, category, photos })
    onCreate(voice)
    navigate(`/voices/${voice.id}`)
  }

  return (
    <PageContainer maxWidth="narrow">
      <div className={styles.page}>
        <h1 className="text-headline-lg">의견 쓰기</h1>
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
            <span className={styles.label}>사진 첨부</span>
            <PhotoUploadField photos={photos} onChange={setPhotos} />
          </div>
          <div className={styles.actions}>
            <Button variant="secondary" to="/voices">
              취소
            </Button>
            <Button type="submit">등록하기</Button>
          </div>
        </form>
      </div>
    </PageContainer>
  )
}
