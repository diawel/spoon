import styles from './index.module.css'
import gallery from './gallery.svg'
import history from './history.svg'
import Image from 'next/image'
import Click from '@/components/Click'
import spoon from './spoon.svg'
import commonAnimation from '@/utils/commonAnimation.module.css'
import Link from 'next/link'

export type ControlProps = {
  onCapture: () => void
  loadFile: (file: File) => void
  isAnimating?: boolean
}

const Control: React.FC<ControlProps> = ({
  onCapture,
  loadFile,
  isAnimating,
}) => {
  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.type.indexOf('image/') !== 0) return

    loadFile(file)
  }

  return (
    <div className={styles['container']}>
      <label className={styles['input-label']}>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={onFileUpload}
          className={styles['input']}
        />
        <Image
          className={isAnimating ? commonAnimation['fadeOut'] : ''}
          src={gallery}
          alt="gallery"
          priority
        />
      </label>
      <Click onClick={isAnimating ? () => {} : onCapture}>
        <div className={styles['spoon-wrapper']}>
          <Image
            className={isAnimating ? styles['spoon-slideOut'] : ''}
            src={spoon}
            alt="spoon"
            priority
          />
        </div>
      </Click>
      <Link href="/history">
        <Image
          className={isAnimating ? commonAnimation['fadeOut'] : ''}
          src={history}
          alt="history"
          priority
        />
      </Link>
    </div>
  )
}

export default Control
