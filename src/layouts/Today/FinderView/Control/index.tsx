import styles from './index.module.css'
import gallery from './gallery.svg'
import history from './history.svg'
import Image from 'next/image'
import Click from '@/components/Click'

export type ControlProps = {
  onCapture: () => void
}

const Control: React.FC<ControlProps> = ({ onCapture }) => {
  return (
    <div className={styles['container']}>
      <Image src={gallery} alt="gallery" />
      <Click onClick={onCapture}>
        <div className={styles['shutter']} />
      </Click>
      <Image src={history} alt="history" />
    </div>
  )
}

export default Control
