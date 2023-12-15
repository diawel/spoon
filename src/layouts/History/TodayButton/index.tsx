import Image from 'next/image'
import styles from './index.module.css'
import arrow from './arrow.svg'
import Link from 'next/link'

const TodayButton: React.FC = () => {
  return (
    <Link href="/">
      <div className={styles['container']}>
        <Image src={arrow} alt="arrow" priority />
        今日のアイス
      </div>
    </Link>
  )
}

export default TodayButton
