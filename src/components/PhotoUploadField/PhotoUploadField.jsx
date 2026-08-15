import { useRef } from 'react'
import { IconPhotoUp, IconX } from '@tabler/icons-react'
import styles from './PhotoUploadField.module.css'

export default function PhotoUploadField({ photos, onChange }) {
  const inputRef = useRef(null)

  function handleFiles(fileList) {
    const files = Array.from(fileList)
    const newPhotos = files.map((file) => ({
      id: `${file.name}-${file.size}-${file.lastModified}`,
      url: URL.createObjectURL(file),
    }))
    onChange([...photos, ...newPhotos])
  }

  function handleRemove(id) {
    onChange(photos.filter((photo) => photo.id !== id))
  }

  return (
    <div>
      <button
        type="button"
        className={styles.dropzone}
        onClick={() => inputRef.current?.click()}
      >
        <IconPhotoUp size={24} stroke={1.5} aria-hidden="true" />
        <span>사진을 선택하거나 여기로 끌어다 놓으세요</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className={styles.hiddenInput}
        onChange={(e) => {
          if (e.target.files?.length) handleFiles(e.target.files)
          e.target.value = ''
        }}
      />
      {photos.length > 0 && (
        <div className={styles.thumbnailRow}>
          {photos.map((photo) => (
            <div className={styles.thumbnail} key={photo.id}>
              <img src={photo.url} alt="" />
              <button
                type="button"
                className={styles.removeButton}
                onClick={() => handleRemove(photo.id)}
                aria-label="사진 삭제"
              >
                <IconX size={12} stroke={2} aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
