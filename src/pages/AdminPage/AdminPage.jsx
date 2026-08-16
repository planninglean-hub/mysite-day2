import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { IconPlus, IconTrash } from '@tabler/icons-react'
import PageContainer from '../../components/PageContainer/PageContainer'
import Tabs from '../../components/Tabs/Tabs'
import CategoryChip from '../../components/CategoryChip/CategoryChip'
import StatusButtonGroup from '../../components/StatusButtonGroup/StatusButtonGroup'
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog'
import TextField from '../../components/TextField/TextField'
import Button from '../../components/Button/Button'
import { useAuth } from '../../context/AuthContext'
import { formatRelativeTime } from '../../utils/formatDateTime'
import styles from './AdminPage.module.css'

const TABS = [
  { value: 'posts', label: '접수된 글' },
  { value: 'categories', label: '분야 관리' },
]

export default function AdminPage({
  voices,
  loading,
  categories,
  onUpdateStatus,
  onDelete,
  onAddCategory,
  onDeleteCategory,
}) {
  const { user, isAdmin, loading: authLoading } = useAuth()
  const [tab, setTab] = useState('posts')
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [deleting, setDeleting] = useState(false)
  const [newCategory, setNewCategory] = useState('')
  const [categoryError, setCategoryError] = useState(null)
  const [categoryDeleteTarget, setCategoryDeleteTarget] = useState(null)
  const [deletingCategory, setDeletingCategory] = useState(false)

  if (authLoading) return null
  if (!user || !isAdmin) {
    return <Navigate to="/" replace />
  }

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

  async function handleAddCategory(e) {
    e.preventDefault()
    const name = newCategory.trim()
    if (!name) return
    setCategoryError(null)
    try {
      await onAddCategory(name)
      setNewCategory('')
    } catch (err) {
      setCategoryError(err.message)
    }
  }

  async function handleDeleteCategoryConfirm() {
    if (!categoryDeleteTarget) return
    setDeletingCategory(true)
    setCategoryError(null)
    try {
      await onDeleteCategory(categoryDeleteTarget)
    } catch (err) {
      setCategoryError(err.message)
    } finally {
      setDeletingCategory(false)
      setCategoryDeleteTarget(null)
    }
  }

  return (
    <PageContainer>
      <div className={styles.page}>
        <h1 className="text-headline-lg">관리자</h1>
        <Tabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === 'posts' ? (
          <div className={styles.list}>
            {loading ? (
              <p className={styles.empty}>불러오는 중...</p>
            ) : voices.length === 0 ? (
              <p className={styles.empty}>등록된 글이 없어요.</p>
            ) : (
              voices.map((voice) => (
                <div key={voice.id} className={styles.card}>
                  <div className={styles.rowTop}>
                    {voice.photo && (
                      <img src={voice.photo.url} alt="" className={styles.thumbnail} />
                    )}
                    <div className={styles.rowMain}>
                      <div className={styles.itemTop}>
                        <CategoryChip label={voice.category} />
                        <span className={styles.meta}>
                          {voice.author} · {formatRelativeTime(voice.createdAt)}
                        </span>
                      </div>
                      <Link to={`/voices/${voice.id}`} className={styles.title}>
                        {voice.title}
                      </Link>
                    </div>
                  </div>
                  <div className={styles.rowActions}>
                    <StatusButtonGroup
                      status={voice.status}
                      onChange={(status) => onUpdateStatus(voice.id, status)}
                    />
                    {(voice.userId === user.id || isAdmin) && (
                      <button
                        type="button"
                        className={styles.deleteButton}
                        aria-label="삭제"
                        onClick={() => setDeleteTarget(voice)}
                      >
                        <IconTrash size={18} stroke={1.5} aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className={styles.catCard}>
            <span className={styles.label}>새 분야 추가</span>
            <form className={styles.categoryForm} onSubmit={handleAddCategory}>
              <div className={styles.categoryInput}>
                <TextField value={newCategory} onChange={setNewCategory} placeholder="예: 조경" />
              </div>
              <Button type="submit">
                <IconPlus size={16} stroke={2} aria-hidden="true" />
                추가하기
              </Button>
            </form>
            {categoryError && <p className={styles.error}>처리에 실패했어요: {categoryError}</p>}
            <span className={styles.label}>등록된 분야 · {categories.length}개</span>
            <div className={styles.categoryList}>
              {categories.map((c) => (
                <CategoryChip key={c} label={c} onRemove={() => setCategoryDeleteTarget(c)} />
              ))}
            </div>
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

      <ConfirmDialog
        open={!!categoryDeleteTarget}
        title="분야 삭제"
        message={`'${categoryDeleteTarget ?? ''}' 분야를 삭제할까요? 이 분야로 등록된 글은 분류만 유지되고 삭제되지 않아요.`}
        confirmLabel={deletingCategory ? '삭제 중...' : '삭제하기'}
        cancelLabel="취소"
        onConfirm={handleDeleteCategoryConfirm}
        onCancel={() => setCategoryDeleteTarget(null)}
      />
    </PageContainer>
  )
}
