import { useState } from 'react'
import PageContainer from '../../components/PageContainer/PageContainer'
import CategoryChip from '../../components/CategoryChip/CategoryChip'
import PostCard from '../../components/PostCard/PostCard'
import Button from '../../components/Button/Button'
import { CATEGORIES } from '../../data/mockVoices'
import styles from './VoiceListPage.module.css'

export default function VoiceListPage({ voices }) {
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const filtered =
    selectedCategory === '전체' ? voices : voices.filter((v) => v.category === selectedCategory)

  return (
    <PageContainer>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className="text-headline-lg">우리 동네 목소리함</h1>
          <Button to="/voices/new">의견 쓰기</Button>
        </div>

        <div className={styles.filterRow}>
          {['전체', ...CATEGORIES].map((category) => (
            <CategoryChip
              key={category}
              label={category}
              selected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className={styles.empty}>이 분야에 등록된 의견이 아직 없어요.</p>
        ) : (
          <div className={styles.grid}>
            {filtered.map((voice) => (
              <PostCard key={voice.id} voice={voice} />
            ))}
          </div>
        )}
      </div>
    </PageContainer>
  )
}
