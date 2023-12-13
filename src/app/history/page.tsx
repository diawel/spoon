'use client'
import dynamic from 'next/dynamic'
import { Zen_Old_Mincho } from 'next/font/google'
import { useState } from 'react'
import { iceCellData } from './DummyData'

import TodayIceButton from './components/TodayIceButton'
import TabViewButton from './components/TabViewButton'

import styles from './page.module.css'
import { IceCellDataProps } from './types/IceCellDataProps'

const FridgeView = dynamic(() => import('./components/FridgeView'), {
  ssr: false,
})
const PhotoView = dynamic(() => import('./components/PhotoView'), {
  ssr: false,
})

const ZenOldMinchoFont = Zen_Old_Mincho({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  const [selectedElement, setSelectedElement] =
    useState<IceCellDataProps | null>(null)

  const handleIceCellTap = (element: IceCellDataProps) => {
    setSelectedElement(element)
  }

  return (
    <main className={styles.main}>
      <div className={styles.todayIceButton}>
        <TodayIceButton />
      </div>
      <div className={styles.photoViewContainer}>
        <PhotoView selectedElement={selectedElement} />
      </div>
      <div className={styles.tabViewButtonContainer}>
        <TabViewButton />
      </div>
      <div className={styles.fridgeContainer}>
        <FridgeView onIceCellTap={handleIceCellTap} historyData={iceCellData} />
      </div>
    </main>
  )
}
