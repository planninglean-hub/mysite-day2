import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export default function Button({
  variant = 'primary',
  to,
  type = 'button',
  onClick,
  disabled,
  children,
}) {
  const className = `${styles.button} ${variant === 'secondary' ? styles.secondary : styles.primary}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
