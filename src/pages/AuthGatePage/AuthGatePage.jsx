import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog'
import GoogleIcon from '../../components/GoogleIcon/GoogleIcon'
import styles from './AuthGatePage.module.css'

const COPY = {
  login: {
    title: '로그인',
    description: '구글 계정으로 로그인하고 우리 동네 이야기에 참여해보세요.',
    switchTo: { path: '/signup', label: '회원가입' },
  },
  signup: {
    title: '회원가입',
    description: '구글 계정으로 간편하게 가입하고 이웃과 소식을 나눠보세요.',
    switchTo: { path: '/login', label: '로그인' },
  },
}

export default function AuthGatePage({ mode }) {
  const { user, signInWithGoogle } = useAuth()
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  if (user) {
    return <Navigate to="/voices" replace />
  }

  const copy = COPY[mode] ?? COPY.login

  async function handleConfirm() {
    setConfirmOpen(false)
    setSubmitting(true)
    setError(null)
    try {
      await signInWithGoogle()
    } catch (err) {
      setError(err.message)
      setSubmitting(false)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>{copy.title}</h1>
        <p className={styles.description}>{copy.description}</p>

        <button
          type="button"
          className={styles.googleButton}
          onClick={() => setConfirmOpen(true)}
          disabled={submitting}
        >
          <GoogleIcon />
          구글로 계속하기
        </button>

        {error && <p className={styles.error}>로그인에 실패했어요: {error}</p>}

        <p className={styles.switchLink}>
          {mode === 'signup' ? '이미 계정이 있나요? ' : '아직 계정이 없나요? '}
          <Link to={copy.switchTo.path}>{copy.switchTo.label}</Link>
        </p>
      </div>

      <ConfirmDialog
        open={confirmOpen}
        title="구글로 계속하기"
        message={
          '구글 계정으로 계속합니다.\n처음이면 회원가입이, 이미 회원이면 로그인이 진행됩니다.\n계속할까요?'
        }
        confirmLabel="계속하기"
        cancelLabel="취소"
        onConfirm={handleConfirm}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  )
}
