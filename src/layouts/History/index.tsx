'use client'

import React, { useState } from 'react'
import styles from './index.module.css'
import TodayIceButton from './Fridge/TodayIceButton/TodayIceButton'
import PhotoView from './Photo/PhotoView'
import FridgeView from './Fridge/FridgeView'
import { Ice } from '@/utils/history'
import { useLiveQuery } from 'dexie-react-hooks'
import { history } from '@/utils/history'

const History: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<Ice | null>(null)
  const handleIceCellTap = (element: Ice) => {
    setSelectedElement(element)
  }
  const liveQuery = useLiveQuery(async () => {
    return {
      days: await history.days.toArray(),
    }
  })

  if (!liveQuery) return <></>
  return (
    <main className={styles.main}>
      <div className={styles.todayIceButtonContainer}>
        <TodayIceButton />
      </div>
      <div className={styles.photoViewContainer}>
        <PhotoView selectedElement={selectedElement} />
      </div>
      <div className={styles.fridgeContainer}>
        <FridgeView
          onIceCellTap={handleIceCellTap}
          historyData={liveQuery.days}
        />
      </div>
    </main>
  )
}

export default History
