import styles from './Tabs.module.css'

export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          className={`${styles.tab} ${active === tab.value ? styles.active : ''}`}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
