import styles from './index.module.css'
import gallery from './gallery.svg'
import history from './history.svg'
import Image from 'next/image'
import Click from '@/components/Click'
import spoon from './spoon.svg'

export type ControlProps = {
  onCapture: () => void
}

const Control: React.FC<ControlProps> = ({ onCapture }) => {
  return (
    <div className={styles['container']}>
      <Image src={gallery} alt="gallery" />
      <Click onClick={onCapture}>
        <div className={styles['spoon-wrapper']}>
          <Image src={spoon} alt="spoon" />
        </div>
      </Click>
      <Image src={history} alt="history" />
    </div>
  )
}

export default Control
