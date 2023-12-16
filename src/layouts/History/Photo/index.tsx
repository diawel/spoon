import Icecream from '@/components/Icecream'
import Image from 'next/image'
import styles from './index.module.css'
import { Ice } from '@/utils/history'
import { useEffect, useState } from 'react'

export type PhotoProps = {
  selectedIce: Ice | null
}

const Photo: React.FC<PhotoProps> = ({ selectedIce }) => {
  if (selectedIce) {
    return (
      <div className={styles['container']} key={selectedIce.dateString}>
        <div className={styles['innerContainer-wrapper']}>
          <div className={styles['innerContainer']}>
            <div className={styles['photo-container']}>
              <Image
                className={styles['photo']}
                src={URL.createObjectURL(selectedIce.image)}
                width={512}
                height={512}
                alt="source photo"
              />
              <div className={styles['overlay']}>
                <div className={styles['month']}>
                  {selectedIce.date.getMonth() + 1}月
                </div>
                <div className={styles['day']}>
                  {selectedIce.date.getDate()}
                </div>
              </div>
              <div className={styles['icecream-container']}>
                <Icecream {...selectedIce} />
              </div>
            </div>
            <div className={styles['flavor-container']}>
              {selectedIce.flavor}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return <div className={styles['container']}>アイスが空っぽ</div>
}

export default Photo
