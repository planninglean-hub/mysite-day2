import styles from './PageContainer.module.css'

export default function PageContainer({ maxWidth = 'default', children }) {
  const className = `${styles.container} ${maxWidth === 'narrow' ? styles.narrow : ''}`
  return <div className={className}>{children}</div>
}
