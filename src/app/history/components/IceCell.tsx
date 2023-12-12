import React from 'react'
import { IceCellProps } from '../types/IceCellProps'
import styles from './IceCell.module.css'

const IceCell: React.FC<IceCellProps> = ({ iceCell, onIceCellTap }) => {
  const handleTap = () => {
    onIceCellTap(iceCell)
  }

  return (
    <div onClick={handleTap}>
      <div
        className={styles.iceCell}
        style={{ backgroundColor: iceCell.color }}
      ></div>
    </div>
  )
}

export default IceCell
