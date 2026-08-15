import Button from '../Button/Button'
import styles from './HeroBanner.module.css'

export default function HeroBanner({ voices = [], loading = false }) {
  const total = voices.length
  const done = voices.filter((v) => v.status === '완료').length

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <img src="/icons/icon-192.png" alt="" className={styles.icon} />
          <span className={styles.name}>위스테이별내 사회적협동조합</span>
        </div>
        <p className={styles.tagline}>491세대가 이웃이 되어 함께 가꾸는 협동조합형 공동체 아파트</p>
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
        <Button to="/voices/new">의견 남기기</Button>
      </div>
    </section>
  )
}
