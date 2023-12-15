import Icecream from '@/components/Icecream'
import Image from 'next/image'
import React, { useRef } from 'react'
import styles from './index.module.css'
import { Ice } from '@/utils/history'

import { useEffect, useState } from 'react'
export type PhotoProps = {
  selectedIce: Ice | null
}

const Photo: React.FC<PhotoProps> = ({ selectedIce }) => {
  if (selectedIce) {
    return (
      <div className={styles.container}>
        <div className={styles.photoContainer}>
          <div className={styles.iceLayout}>
            <Image
              className={styles.photo}
              src={URL.createObjectURL(selectedIce.image)}
              width={512}
              height={512}
              alt="source photo"
            />

            <div className={styles.iceCreamContaner}>
              <Icecream
                pattern={selectedIce.pattern}
                colors={selectedIce.colors}
              />
            </div>
            <div className={styles.photoOverlay}>
              <p className={styles.photo_month}>
                {selectedIce.date.getMonth() + 1}月
              </p>
              <p className={styles.photo_day}>{selectedIce.date.getDate()}</p>
            </div>
            <p className={styles.flavor_name}>{selectedIce.flavor}</p>
          </div>
          <div className={styles.iceCreamContaner}>
            <Icecream
              pattern={selectedIce.pattern}
              colors={selectedIce.colors}
            />
          </div>
        </div>
      </div>
    )
  }
  return <></>
}

export default Photo
