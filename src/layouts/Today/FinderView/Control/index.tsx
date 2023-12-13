import styles from './index.module.css'
import gallery from './gallery.svg'
import history from './history.svg'
import Image from 'next/image'
import Click from '@/components/Click'
import spoon from './spoon.svg'
import commonAnimation from '@/utils/commonAnimation.module.css'

export type ControlProps = {
  onCapture: () => void
  isAnimating?: boolean
}

const Control: React.FC<ControlProps> = ({ onCapture, isAnimating }) => {
  return (
    <div className={styles['container']}>
      <Image
        className={isAnimating ? commonAnimation['fadeOut'] : ''}
        src={gallery}
        alt="gallery"
      />
      <Click onClick={onCapture}>
        <div className={styles['spoon-wrapper']}>
          <Image
            className={isAnimating ? styles['spoon-slideOut'] : ''}
            src={spoon}
            alt="spoon"
          />
        </div>
      </Click>
      <Image
        className={isAnimating ? commonAnimation['fadeOut'] : ''}
        src={history}
        alt="history"
      />
    </div>
  )
}

export default Control
