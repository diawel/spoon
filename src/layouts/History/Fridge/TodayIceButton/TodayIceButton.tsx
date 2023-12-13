import { Kaisei_Opti } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import styles from './TodayIceButton.module.css'

const KaiseiOptiFont = Kaisei_Opti({
  weight: '400',
  subsets: ['latin'],
})

const TodayIceButton: React.FC = () => {
  return (
    <div className={styles.todayIceButton}>
      <a href="/">
        <div className={styles.todayIceButton}>
          <div className={styles.arrowIcon}>
            <Image
              src="/left_arrow.svg"
              alt="Your SVG Image"
              width={24}
              height={24}
            />
          </div>
          <p className={`${KaiseiOptiFont.className}`}>今日のアイス</p>
        </div>
      </a>
    </div>
  )
}

export default TodayIceButton
