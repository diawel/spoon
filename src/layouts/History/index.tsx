'use client'

import { useState } from 'react'
import styles from './index.module.css'
import TodayIceButton from './FridgeView/TodayIceButton'
import PhotoView from './PhotoView'
import FridgeView from './FridgeView'
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
