'use client'
import React, { useState } from 'react'
import styles from './index.module.css'
import { Day } from './utils'
import TodayIceButton from './Fridge/TodayIceButton/TodayIceButton'
import { iceCellData } from './Dummy'
import PhotoView from './Photo/PhotoView'
import FridgeView from './Fridge/FridgeView'

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
