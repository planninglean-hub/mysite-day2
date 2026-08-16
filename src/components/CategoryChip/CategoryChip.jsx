import { IconX } from '@tabler/icons-react'
import styles from './CategoryChip.module.css'

export default function CategoryChip({ label, selected = false, onClick, onRemove }) {
  const className = `${styles.chip} ${selected ? styles.selected : ''}`

  if (onRemove) {
    return (
      <span className={className}>
        {label}
        <button
          type="button"
          className={styles.removeButton}
          onClick={onRemove}
          aria-label={`${label} 삭제`}
        >
          <IconX size={12} stroke={2} aria-hidden="true" />
        </button>
      </span>
    )
  }

  if (onClick) {
    return (
      <button type="button" className={className} onClick={onClick} aria-pressed={selected}>
        {label}
      </button>
    )
  }

  return <span className={className}>{label}</span>
}
