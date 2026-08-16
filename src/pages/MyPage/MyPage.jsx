import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import PageContainer from '../../components/PageContainer/PageContainer'
import StatusBadge from '../../components/StatusBadge/StatusBadge'
import CategoryChip from '../../components/CategoryChip/CategoryChip'
import Button from '../../components/Button/Button'
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog'
import Tabs from '../../components/Tabs/Tabs'
import { useAuth } from '../../context/AuthContext'
import { formatRelativeTime } from '../../utils/formatDateTime'
import styles from './MyPage.module.css'

const TABS = [
  { value: 'posts', label: '내가 쓴 글' },
  { value: 'profile', label: '내 정보' },
]

export default function MyPage({ voices, loading, onDelete }) {
  const { user, signOut } = useAuth()
  const [tab, setTab] = useState('posts')
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [deleting, setDeleting] = useState(false)

  if (!user) {
    return <Navigate to="/login" replace />
  }

  const myVoices = voices.filter((v) => v.userId === user.id)
  const avatarUrl = user.user_metadata?.avatar_url
  const displayName = user.user_metadata?.full_name ?? user.email

  async function handleDeleteConfirm() {
    if (!deleteTarget) return
    setDeleting(true)
    try {
      await onDelete(deleteTarget.id)
    } finally {
      setDeleting(false)
      setDeleteTarget(null)
    }
  }

  return (
    <PageContainer maxWidth="narrow">
      <div className={styles.page}>
        <h1 className="text-headline-lg">마이페이지</h1>

        <Tabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === 'posts' ? (
          <div className={styles.list}>
            {loading ? (
              <p className={styles.empty}>불러오는 중...</p>
            ) : myVoices.length === 0 ? (
              <p className={styles.empty}>아직 작성한 글이 없어요.</p>
            ) : (
              myVoices.map((voice) => (
                <div key={voice.id} className={styles.item}>
                  <Link to={`/voices/${voice.id}`} className={styles.itemMain}>
                    <div className={styles.tags}>
                      <StatusBadge status={voice.status} />
                      <CategoryChip label={voice.category} />
                    </div>
                    <div className={styles.title}>{voice.title}</div>
                    <div className={styles.meta}>{formatRelativeTime(voice.createdAt)}</div>
                  </Link>
                  <div className={styles.itemActions}>
                    <Link to={`/voices/${voice.id}/edit`} className={styles.editLink}>
                      수정
                    </Link>
                    <button
                      type="button"
                      className={styles.deleteButton}
                      onClick={() => setDeleteTarget(voice)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className={styles.profile}>
            {avatarUrl ? (
              <img src={avatarUrl} alt="" className={styles.avatar} />
            ) : (
              <div className={styles.avatarFallback}>{displayName?.trim()?.[0] ?? '?'}</div>
            )}
            <div className={styles.profileInfo}>
              <div className={styles.profileName}>{displayName}</div>
              <div className={styles.profileEmail}>{user.email}</div>
            </div>
            <Button variant="secondary" onClick={signOut}>
              로그아웃
            </Button>
          </div>
        )}
      </div>

      <ConfirmDialog
        open={!!deleteTarget}
        title="글 삭제"
        message={`'${deleteTarget?.title ?? ''}' 글을 삭제할까요? 삭제하면 되돌릴 수 없어요.`}
        confirmLabel={deleting ? '삭제 중...' : '삭제하기'}
        cancelLabel="취소"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </PageContainer>
  )
}
