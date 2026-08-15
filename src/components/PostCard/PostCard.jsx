import { Link } from 'react-router-dom'
import StatusBadge from '../StatusBadge/StatusBadge'
import CategoryChip from '../CategoryChip/CategoryChip'
import Avatar from '../Avatar/Avatar'
import { formatRelativeTime } from '../../utils/formatDateTime'
import styles from './PostCard.module.css'

export default function PostCard({ voice }) {
  const photo = voice.photos?.[0]

  return (
    <Link to={`/voices/${voice.id}`} className={styles.card}>
      {photo && (
        <div className={styles.thumbnail}>
          <img src={photo.url} alt="" />
        </div>
      )}
      <div className={styles.body}>
        <div className={styles.tags}>
          <StatusBadge status={voice.status} />
          <CategoryChip label={voice.category} />
        </div>
        <div className={styles.title}>{voice.title}</div>
        <div className={styles.preview}>{voice.body}</div>
        <div className={styles.meta}>
          <Avatar name={voice.author} />
          <span>
            {voice.author} · {formatRelativeTime(voice.createdAt)}
          </span>
        </div>
      </div>
    </Link>
  )
}
