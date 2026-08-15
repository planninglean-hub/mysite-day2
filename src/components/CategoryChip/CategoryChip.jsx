import styles from './CategoryChip.module.css'

export default function CategoryChip({ label, selected = false, onClick }) {
  const className = `${styles.chip} ${selected ? styles.selected : ''}`

  if (onClick) {
    return (
      <button type="button" className={className} onClick={onClick} aria-pressed={selected}>
        {label}
      </button>
    )
  }

  return <span className={className}>{label}</span>
}
