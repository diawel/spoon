import Image from 'next/image'
import Cream, { CreamProps } from './Cream'
import cone from './cone.svg'
import styles from './index.module.css'

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
