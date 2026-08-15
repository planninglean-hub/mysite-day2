import styles from './StatusBadge.module.css'

const STATUS_CLASS = {
  접수: styles.received,
  처리중: styles.progress,
  완료: styles.done,
}

export default function StatusBadge({ status }) {
  const className = `${styles.badge} ${STATUS_CLASS[status] ?? styles.received}`
  return <span className={className}>{status}</span>
}
