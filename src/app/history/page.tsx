'use client'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import TodayIceButton from '../../layouts/Fridge/TodayIceButton/TodayIceButton'
import { iceCellData } from './Dummy'

import styles from './page.module.css'
import { Day } from './utils'

const FridgeView = dynamic(() => import('../../layouts/Fridge/FridgeView'), {
  ssr: false,
})
const PhotoView = dynamic(() => import('../../layouts/Photo/PhotoView'), {
  ssr: false,
})

export const Home: React.FC = ({}) => {
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

export default Home
