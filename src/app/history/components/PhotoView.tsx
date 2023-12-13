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
          <div>
            <p className={`${styles.day} ${ZenOldMinchoFont.className}`}>
              {selectedElement.dateAdded.getDate()}/
              {selectedElement.dateAdded.getDate()}
            </p>
            <Image
              className={styles.photo}
              src="/test.JPG"
              width={240}
              height={240}
              alt="photo before ice cream"
            />
            <p
              className={`${styles.photo_name} ${KaiseiTokuminFont.className}`}
            >
              {selectedElement.name}
            </p>
          </div>
        ) : (
          <div>
            <p className={`${styles.day} ${ZenOldMinchoFont.className}`}>
              No data
            </p>
            <Image
              className={styles.photo}
              src="/hinyari_ebisyuri.png"
              width={240}
              height={240}
              alt="dummy photo"
            />
            <p
              className={`${styles.flavor_name} ${KaiseiTokuminFont.className}`}
            >
              No data
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PhotoView
