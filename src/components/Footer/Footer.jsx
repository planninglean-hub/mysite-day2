import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img src="/icons/icon-192.png" alt="" className={styles.icon} />
        <div className={styles.text}>
          <span className={styles.org}>위스테이별내 사회적협동조합</span>
          <span className={styles.tagline}>491세대가 이웃이 되어 함께 가꾸는 협동조합형 공동체 아파트</span>
        </div>
      </div>
    </footer>
  )
}
