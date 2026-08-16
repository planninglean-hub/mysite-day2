import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import styles from './Header.module.css'

export default function Header() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const avatarUrl = user?.user_metadata?.avatar_url
  const displayName = user?.user_metadata?.full_name ?? user?.email ?? ''

  useEffect(() => {
    if (!menuOpen) return
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  async function handleSignOut() {
    setMenuOpen(false)
    await signOut()
    navigate('/')
  }

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img src="/icons/icon-192.png" alt="" className={styles.icon} />
        <span className={styles.name}>위스테이별내 사회적협동조합</span>
      </Link>

      {user ? (
        <div className={styles.menu} ref={menuRef}>
          <button
            type="button"
            className={styles.avatarButton}
            aria-label="계정 메뉴"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {avatarUrl ? (
              <img src={avatarUrl} alt="" className={styles.avatarImg} />
            ) : (
              <span className={styles.avatarFallback}>{displayName.trim()[0] ?? '?'}</span>
            )}
          </button>

          {menuOpen && (
            <div className={styles.dropdown} role="menu">
              <Link to="/mypage" className={styles.dropdownItem} role="menuitem" onClick={() => setMenuOpen(false)}>
                마이페이지
              </Link>
              <button type="button" className={styles.dropdownItem} role="menuitem" onClick={handleSignOut}>
                로그아웃
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.actions}>
          <Link to="/login" className={styles.navButton}>
            로그인
          </Link>
          <Link to="/signup" className={`${styles.navButton} ${styles.navButtonPrimary}`}>
            회원가입
          </Link>
        </div>
      )}
    </header>
  )
}
