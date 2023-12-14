import Cream, { CreamProps } from './Cream'
import styles from './index.module.css'
import cone from './cone.svg'
import Image from 'next/image'

export type IcecreamProps = CreamProps & {
  animate?: boolean
}

const Icecream: React.FC<IcecreamProps> = ({ pattern, colors, animate }) => {
  return (
    <div className={styles['container']}>
      <div
        className={
          styles['cream-wrapper'] +
          (animate ? ` ${styles['animated-cream']}` : '')
        }
      >
        <Cream {...{ pattern, colors }} />
      </div>
      <Image className={styles['cone']} src={cone} alt="cone" priority />
    </div>
  )
}

export default Icecream
