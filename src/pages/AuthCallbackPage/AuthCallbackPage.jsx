import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useToast } from '../../context/ToastContext'
import styles from './AuthCallbackPage.module.css'

const NEW_SIGNUP_THRESHOLD_MS = 10_000

function isNewSignup(user) {
  if (!user?.created_at || !user?.last_sign_in_at) return false
  const created = new Date(user.created_at).getTime()
  const signedIn = new Date(user.last_sign_in_at).getTime()
  return Math.abs(signedIn - created) < NEW_SIGNUP_THRESHOLD_MS
}

export default function AuthCallbackPage() {
  const { user, loading } = useAuth()
  const { showToast } = useToast()
  const navigate = useNavigate()
  const handled = useRef(false)
  const [authError, setAuthError] = useState(null)

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ''))
    const queryParams = new URLSearchParams(window.location.search)
    const description =
      hashParams.get('error_description') ||
      queryParams.get('error_description') ||
      hashParams.get('error') ||
      queryParams.get('error')
    if (description) {
      setAuthError(description)
    }
  }, [])

  useEffect(() => {
    if (handled.current || loading || !user) return
    handled.current = true
    showToast(isNewSignup(user) ? '가입을 마쳤습니다. 환영해요!' : '로그인되었습니다.')
    navigate('/voices', { replace: true })
  }, [user, loading, showToast, navigate])

  if (authError) {
    return (
      <div className={styles.page}>
        <p className={styles.message}>로그인에 실패했어요: {authError}</p>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <p className={styles.message}>로그인 처리 중입니다...</p>
    </div>
  )
}
