'use client'

import React, { useState } from 'react'
import styles from './index.module.css'
import TodayIceButton from './Fridge/TodayIceButton/TodayIceButton'
import PhotoView from './Photo/PhotoView'
import FridgeView from './Fridge/FridgeView'
import { Ice } from '@/utils/history'
import { useLiveQuery } from 'dexie-react-hooks'
import { history } from '@/utils/history'
import { motion } from 'framer-motion'

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

  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } },
  }

  if (!liveQuery) return <></>
  return (
    <main className={styles.main}>
      <div className={styles.todayIceButtonContainer}>
        <TodayIceButton />
      </div>
      <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
        <div className={styles.photoViewContainer}>
          <PhotoView selectedElement={selectedElement} />
        </div>
        <div className={styles.fridgeContainer}>
          <FridgeView
            onIceCellTap={handleIceCellTap}
            historyData={liveQuery.days}
          />
        </div>
      </motion.div>
    </main>
  )
}

export default History
