'use client'
import dynamic from 'next/dynamic'
import { Zen_Old_Mincho } from 'next/font/google'
import { useState } from 'react'
import { iceCellData } from './DummyData'

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
      <div>
        <PhotoView selectedElement={selectedElement} />
      </div>
      <div className={styles.tabViewButton}>
        <TabViewButton />
      </div>
      <div className={styles.fridgeContainer}>
        <FridgeView onIceCellTap={handleIceCellTap} historyData={iceCellData} />
      </div>
    </main>
  )
}
