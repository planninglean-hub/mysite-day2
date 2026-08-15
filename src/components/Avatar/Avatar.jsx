import styles from './Avatar.module.css'

export default function Avatar({ name }) {
  const initial = name?.trim()?.[0] ?? '?'
  return <span className={styles.avatar}>{initial}</span>
}
