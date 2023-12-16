'use client'

import { useEffect, useState } from 'react'
import styles from './index.module.css'
import Photo from './Photo'
import Fridge from './Fridge'
import { Ice, dateToDbDate } from '@/utils/history'
import { history } from '@/utils/history'
import TodayButton from './TodayButton'

export type DayTable = { date: Date; ice?: Ice }[]

const History: React.FC = () => {
  const [dayTable, setDayTable] = useState<DayTable | null>(null)
  const [selectedIce, setSelectedIce] = useState<Ice | null>(null)

  useEffect(() => {
    history.days.toArray().then((days) => {
      const dayTable: DayTable = []
      let latestIce
      if (days.length) {
        const datePointer = new Date(days[0].dateString)
        const todayString = dateToDbDate(new Date())
        let datePointerString: string
        while ((datePointerString = dateToDbDate(datePointer)) <= todayString) {
          const ice = days.find((day) => datePointerString === day.dateString)
          dayTable.push({
            date: new Date(datePointer),
            ice,
          })
          if (ice) latestIce = ice
          datePointer.setDate(datePointer.getDate() + 1)
        }
      }
      setDayTable(dayTable)
      setSelectedIce(latestIce ?? null)
    })
  }, [])

  return (
    <div className={styles['container']}>
      <div className={styles['todayButton-container']}>
        <TodayButton />
      </div>
      {dayTable && (
        <>
          <div className={styles['photo-container']}>
            <Photo {...{ selectedIce }} />
          </div>
          <div className={styles['fridge-container']}>
            <Fridge {...{ selectedIce, setSelectedIce, dayTable }} />
          </div>
        </>
      )}
    </div>
  )
}

export default History
