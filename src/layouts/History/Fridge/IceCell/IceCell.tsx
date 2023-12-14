import React from 'react'
import styles from './IceCell.module.css'
import { Ice } from '@/utils/history'

export type IceCellProps = {
  iceCell: Ice
  onIceCellTap: (element: Ice) => void
}

const IceCell: React.FC<IceCellProps> = ({ iceCell, onIceCellTap }) => {
  const handleTap = () => {
    onIceCellTap(iceCell)
  }

  return (
    <div onClick={handleTap} className={styles.iceCellContainer}>
      <div className={styles.iceCell}>
        {/* 月全体で最後の月の場合にのみ下の要素を当てる */}
        <div className={styles.month}>{iceCell.date.getMonth() + 1}月</div>
      </div>
    </div>
  )
}

export default IceCell
