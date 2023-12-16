import styles from './index.module.css'
import { Ice, dateToDbDate } from '@/utils/history'
import Cell from './Cell'
import { DayTable } from '..'
import Click from '@/components/Click'
import { useState } from 'react'

type FridgeProps = {
  dayTable: DayTable
  selectedIce: Ice | null
  setSelectedIce: React.Dispatch<React.SetStateAction<Ice | null>>
}

export const Fridge: React.FC<FridgeProps> = ({
  dayTable,
  selectedIce,
  setSelectedIce,
}) => {
  const [whichIsSelected, setWhichIsSelected] = useState<number>(
    dayTable.findIndex((day) => day.ice === selectedIce)
  )

  return (
    <div className={styles['container']}>
      <div
        className={styles['grid']}
        onLoad={(e) => {
          e.currentTarget.scrollIntoView(false)
        }}
      >
        {dayTable.map((day, index) => {
          return (
            <Click
              key={dateToDbDate(day.date)}
              onClick={() => {
                setSelectedIce(day.ice ?? null)
                setWhichIsSelected(index)
              }}
              plain
            >
              {day.date.getDate() === 1 ? (
                <Cell
                  ice={day.ice}
                  monthLabel={day.date.getMonth() + 1}
                  isSelected={index === whichIsSelected}
                />
              ) : (
                <Cell ice={day.ice} isSelected={index === whichIsSelected} />
              )}
            </Click>
          )
        })}
      </div>
    </div>
  )
}

export default Fridge
