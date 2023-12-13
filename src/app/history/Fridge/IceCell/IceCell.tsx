import React from 'react'
import { IceCellProps } from '../../utils'
import styles from './IceCell.module.css'

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
