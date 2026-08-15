import { useRef } from 'react'
import { IconPhotoUp, IconX } from '@tabler/icons-react'
import styles from './PhotoUploadField.module.css'

export default function PhotoUploadField({ photo, onChange }) {
  const inputRef = useRef(null)

  function handleFile(file) {
    onChange({
      id: `${file.name}-${file.size}-${file.lastModified}`,
      url: URL.createObjectURL(file),
      file,
    })
  }

  function handleRemove() {
    onChange(null)
  }

  if (photo) {
    return (
      <div className={styles.thumbnail}>
        <img src={photo.url} alt="" />
        <button
          type="button"
          className={styles.removeButton}
          onClick={handleRemove}
          aria-label="사진 삭제"
        >
          <IconX size={12} stroke={2} aria-hidden="true" />
        </button>
      </div>
    )
  }

  return (
    <div>
      <button type="button" className={styles.dropzone} onClick={() => inputRef.current?.click()}>
        <IconPhotoUp size={24} stroke={1.5} aria-hidden="true" />
        <span>사진을 선택하거나 여기로 끌어다 놓으세요</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className={styles.hiddenInput}
        onChange={(e) => {
          if (e.target.files?.[0]) handleFile(e.target.files[0])
          e.target.value = ''
        }}
      />
    </div>
  )
}
