import { Kaisei_Tokumin, Zen_Old_Mincho } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { PhotoViewProps } from '../types/PhotoViewProps'
import styles from './PhotoView.module.css'

const KaiseiTokuminFont = Kaisei_Tokumin({
  weight: '400',
  subsets: ['latin'],
})

const ZenOldMinchoFont = Zen_Old_Mincho({
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
                {selectedElement.dateAdded.getMonth() + 1}月
              </p>
              <p
                className={`${styles.photo_day} ${KaiseiTokuminFont.className}`}
              >
                {selectedElement.dateAdded.getDate()}
              </p>
            </div>
            <p
              className={`${styles.flavor_name} ${KaiseiTokuminFont.className}`}
            >
              {selectedElement.name}
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
