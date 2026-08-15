import { useParams } from 'react-router-dom'
import PageContainer from '../../components/PageContainer/PageContainer'
import StatusBadge from '../../components/StatusBadge/StatusBadge'
import CategoryChip from '../../components/CategoryChip/CategoryChip'
import Avatar from '../../components/Avatar/Avatar'
import Button from '../../components/Button/Button'
import { formatFullDate } from '../../utils/formatDateTime'
import styles from './VoiceDetailPage.module.css'

export default function VoiceDetailPage({ voices }) {
  const { id } = useParams()
  const voice = voices.find((v) => v.id === id)

  if (!voice) {
    return (
      <PageContainer maxWidth="narrow">
        <div className={styles.notFound}>
          <p>글을 찾을 수 없어요.</p>
          <Button variant="secondary" to="/voices">
            목록으로
          </Button>
        </div>
      </PageContainer>
    )
  }

  const photo = voice.photos?.[0]

  return (
    <PageContainer maxWidth="narrow">
      <div className={styles.page}>
        <Button variant="secondary" to="/voices">
          목록으로
        </Button>

        <div className={styles.tags}>
          <StatusBadge status={voice.status} />
          <CategoryChip label={voice.category} />
        </div>

        <h1 className="text-headline-md">{voice.title}</h1>

        <div className={styles.meta}>
          <Avatar name={voice.author} />
          <span>
            {voice.author} · {formatFullDate(voice.createdAt)}
          </span>
        </div>

        {photo && (
          <div className={styles.photo}>
            <img src={photo.url} alt="" />
          </div>
        )}

        <p className={styles.body}>{voice.body}</p>
      </div>
    </PageContainer>
  )
}
