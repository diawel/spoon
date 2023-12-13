import { Kaisei_Tokumin } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { Day } from '../../app/history/utils'
import styles from './PhotoView.module.css'

export type PhotoViewProps = {
  selectedElement: Day | null
}

const KaiseiTokuminFont = Kaisei_Tokumin({
  weight: '400',
  subsets: ['latin'],
})

const PhotoView: React.FC<PhotoViewProps> = ({ selectedElement }) => {
  return (
    <div>
      <div>
        <div className={styles.container}></div>
        {selectedElement ? (
          <div className={styles.photoContainer}>
            <Image
              className={styles.photo}
              src="/test.JPG"
              width={240}
              height={240}
              alt="photo before ice cream"
            />
            <div className={styles.photoOverlay}>
              <p
                className={`${styles.photo_month} ${KaiseiTokuminFont.className}`}
              >
                {selectedElement.date.getMonth() + 1}月
              </p>
              <p
                className={`${styles.photo_day} ${KaiseiTokuminFont.className}`}
              >
                {selectedElement.date.getDate()}
              </p>
            </div>
            <p
              className={`${styles.flavor_name} ${KaiseiTokuminFont.className}`}
            >
              {selectedElement.flavor}
            </p>
          </div>
        ) : (
          <div className={styles.photoContainer}>
            <Image
              className={styles.photo}
              src="/hinyari_ebisyuri.png"
              width={240}
              height={240}
              alt="photo before ice cream"
            />
            <div className={styles.photoOverlay}>
              <p
                className={`${styles.photo_month} ${KaiseiTokuminFont.className}`}
              ></p>
              <p
                className={`${styles.photo_day} ${KaiseiTokuminFont.className}`}
              ></p>
            </div>
            <p
              className={`${styles.flavor_name} ${KaiseiTokuminFont.className}`}
            >
              アイスがないよ～
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PhotoView
