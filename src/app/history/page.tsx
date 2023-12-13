'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { iceCellData } from './DummyData'

import TabViewButton from './components/TabViewButton'
import TodayIceButton from './components/TodayIceButton'

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
      <div className={styles.todayIceButtonContainer}>
        <TodayIceButton />
      </div>
      <div className={styles.photoViewContainer}>
        <PhotoView selectedElement={selectedElement} />
      </div>
      <div className={styles.tabViewButtonContainer}>
        <div className={styles.rightAligned}>
          <TabViewButton />
        </div>
      </div>
      <div className={styles.fridgeContainer}>
        <FridgeView onIceCellTap={handleIceCellTap} historyData={iceCellData} />
      </div>
    </main>
  )
}
