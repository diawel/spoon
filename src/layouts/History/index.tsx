'use client'
import React, { useState } from 'react'
import { iceCellData } from './Dummy'
import FridgeView from './Fridge/FridgeView'
import TodayIceButton from './Fridge/TodayIceButton/TodayIceButton'
import PhotoView from './Photo/PhotoView'
import styles from './index.module.css'
import { Day } from './utils'

const History: React.FC = () => {
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

export default History
