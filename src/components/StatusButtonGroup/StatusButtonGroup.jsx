import styles from './StatusButtonGroup.module.css'

const STATUSES = [
  { value: '접수', className: 'received' },
  { value: '처리중', className: 'progress' },
  { value: '완료', className: 'done' },
]

export default function StatusButtonGroup({ status, onChange, disabled }) {
  return (
    <div className={styles.group}>
      {STATUSES.map(({ value, className }, index) => {
        const isSelected = status === value
        const positionClass =
          index === 0 ? styles.first : index === STATUSES.length - 1 ? styles.last : ''

        return (
          <button
            key={value}
            type="button"
            className={`${styles.button} ${positionClass} ${isSelected ? styles[className] : styles.unselected}`}
            onClick={() => !isSelected && onChange(value)}
            disabled={disabled}
            aria-pressed={isSelected}
          >
            {value}
          </button>
        )
      })}
    </div>
  )
}
