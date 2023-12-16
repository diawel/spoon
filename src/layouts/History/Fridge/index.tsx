import styles from './index.module.css'
import { Ice, dateToDbDate } from '@/utils/history'
import Cell from './Cell'
import { DayTable } from '..'
import Click from '@/components/Click'

type FridgeProps = {
  dayTable: DayTable
  setSelectedIce: React.Dispatch<React.SetStateAction<Ice | null>>
}

export const Fridge: React.FC<FridgeProps> = ({ dayTable, setSelectedIce }) => {
  return (
    <div className={styles['container']}>
      <div
        className={styles['grid']}
        onLoad={(e) => {
          e.currentTarget.scrollIntoView(false)
        }}
      >
        {dayTable.map((day) => {
          return (
            <Click
              key={dateToDbDate(day.date)}
              onClick={() => setSelectedIce(day.ice ?? null)}
            >
              {day.date.getDate() === 1 ? (
                <Cell ice={day.ice} monthLabel={day.date.getMonth() + 1} />
              ) : (
                <Cell ice={day.ice} />
              )}
            </Click>
          )
        })}
      </div>
    </div>
  )
}

export default Fridge
