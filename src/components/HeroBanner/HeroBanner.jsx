import Button from '../Button/Button'
import { useAuth } from '../../context/AuthContext'
import styles from './HeroBanner.module.css'

export default function HeroBanner({ voices = [], loading = false }) {
  const { user } = useAuth()
  const total = voices.length
  const done = voices.filter((v) => v.status === '완료').length

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.headline}>우리 동네 목소리함</h1>
        <p className={styles.tagline}>이웃에게 하고 싶은 말을 남기고, 동네가 함께 바뀌는 걸 지켜보세요</p>
        {!loading && total > 0 && (
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>{total}건</span>
              <span className={styles.statLabel}>누적 의견</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>{done}건</span>
              <span className={styles.statLabel}>처리 완료</span>
            </div>
          </div>
        )}
        <Button to={user ? '/voices/new' : '/login'}>의견 남기기</Button>
      </div>
    </section>
  )
}
