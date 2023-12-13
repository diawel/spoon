import React from 'react'
import { Day } from '../../../app/history/utils'
import styles from './IceCell.module.css'

export type IceCellProps = {
  iceCell: Day
  onIceCellTap: (element: Day) => void
}

const IceCell: React.FC<IceCellProps> = ({ iceCell, onIceCellTap }) => {
  const handleTap = () => {
    onIceCellTap(iceCell)
  }

  return (
    <div onClick={handleTap} className={styles.iceCellContainer}>
      <div className={styles.iceCell}></div>
    </div>
  )
}

export default IceCell
