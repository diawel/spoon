'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'
// import { iceCellData } from './DummyData'
import { iceCellData } from './Dummy'
import TodayIceButton from './Fridge/TodayIceButton/TodayIceButton'

import styles from './page.module.css'
import { Day } from './utils'

const FridgeView = dynamic(() => import('./Fridge/FridgeView'), {
  ssr: false,
})
const PhotoView = dynamic(() => import('./Photo/PhotoView'), {
  ssr: false,
})

export default function Home() {
  const [selectedElement, setSelectedElement] = useState<Day | null>(null)
  const handleIceCellTap = (element: Day) => {
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
      <div className={styles.fridgeContainer}>
        <FridgeView onIceCellTap={handleIceCellTap} historyData={iceCellData} />
      </div>
    </main>
  )
}
