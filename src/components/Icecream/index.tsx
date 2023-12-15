import Cream, { CreamProps } from './Cream'
import cone from './cone.svg'
import styles from './index.module.css'
import Image from 'next/image'
import effect from './effect.png'
import { useEffect, useState } from 'react'

export type IcecreamProps = CreamProps & {
  animate?: boolean
}

const Icecream: React.FC<IcecreamProps> = ({ pattern, colors, animate }) => {
  const [showEffect, setShowEffect] = useState(false)
  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setShowEffect(true)
      }, 800)
    }
  }, [animate])

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
      {showEffect && (
        <Image
          className={styles['effect']}
          src={effect}
          alt="effect"
          priority
          unoptimized
        />
      )}
    </div>
  )
}

export default Icecream
