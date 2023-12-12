import styles from './index.module.css'
import gallery from './gallery.svg'
import history from './history.svg'
import Image from 'next/image'

const Control: React.FC = () => {
  return (
    <div className={styles['container']}>
      <Image src={gallery} alt="gallery" />
      <div className={styles['shutter']} />
      <Image src={history} alt="history" />
    </div>
  )
}

export default Control
