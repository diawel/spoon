import Icecream from '@/components/Icecream'
import { Kaisei_Tokumin } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import styles from './index.module.css'
import { Ice } from '@/utils/history'

import { useEffect, useState } from 'react'
export type PhotoViewProps = {
  selectedElement: Ice | null
}

const KaiseiTokuminFont = Kaisei_Tokumin({
  weight: '400',
  subsets: ['latin'],
})

const PhotoView: React.FC<PhotoViewProps> = ({ selectedElement }) => {
  const [src, setSrc] = useState('')
  useEffect(() => {
    if (selectedElement) {
      const reader = new FileReader()
      reader.onload = () => {
        setSrc(reader.result as string)
      }
      reader.readAsDataURL(selectedElement.image)
    }
  }, [selectedElement])

  return (
    <div className={styles.container}>
      {selectedElement ? (
        <div className={styles.photoContainer}>
          <div className={styles.iceLayout}>
            <Image
              className={styles.photo}
              src={src}
              width={240}
              height={240}
              alt="photo before ice cream"
            />

            <div className={styles.iceCreamContaner}>
              <Icecream
                pattern={selectedElement.pattern}
                colors={selectedElement.colors}
              />
            </div>
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
          <div className={styles.iceCreamContaner}>
            <Icecream
              pattern={selectedElement.pattern}
              colors={selectedElement.colors}
            />
          </div>
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
          <p className={`${styles.flavor_name} ${KaiseiTokuminFont.className}`}>
            アイスがないよ～
          </p>
        </div>
      )}
    </div>
  )
}

export default PhotoView
