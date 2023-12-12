'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { iceCellData } from './DummyData'
import styles from './page.module.css'
import { IceCellDataProps } from './types/IceCellDataProps'

const FridgeView = dynamic(() => import('./components/FridgeView'), {
  ssr: false,
})
const PhotoView = dynamic(() => import('./components/PhotoView'), {
  ssr: false,
})

export default function Home() {
  const [selectedElement, setSelectedElement] =
    useState<IceCellDataProps | null>(null)

  const handleIceCellTap = (element: IceCellDataProps) => {
    setSelectedElement(element)
  }

  return (
    <main className={styles.main}>
      <div>
        <PhotoView selectedElement={selectedElement} />
      </div>
      <div className={styles.fridgeContainer}>
        <div className={styles.dateContainer}>
          <p className={styles.month}>12</p>
          <p className={styles.year}>2023</p>
        </div>
        <FridgeView onIceCellTap={handleIceCellTap} historyData={iceCellData} />
      </div>
    </main>
  )
}
