import Button from '../Button/Button'
import styles from './HeroBanner.module.css'

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <img src="/icons/icon-192.png" alt="" className={styles.icon} />
          <span className={styles.name}>위스테이별내 사회적협동조합</span>
        </div>
        <p className={styles.tagline}>491세대가 이웃이 되어 함께 가꾸는 협동조합형 공동체 아파트</p>
        <Button to="/voices/new">의견 남기기</Button>
      </div>
    </section>
  )
}
