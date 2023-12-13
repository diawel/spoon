import React from 'react'
import { Day, FridgeViewProps } from '../utils'
import styles from './FridgeView.module.css'
import IceCell from './IceCell/IceCell'

export const FridgeView: React.FC<FridgeViewProps> = ({
  historyData,
  onIceCellTap,
}) => {
  const handleIceCellTapInternal = (element: Day) => {
    onIceCellTap(element)
  }

  return (
    <div className={styles.fridgeContainer}>
      <div className={styles.fridge}>
        {historyData.map((element, i) => (
          <IceCell
            key={i}
            iceCell={element}
            onIceCellTap={handleIceCellTapInternal}
          />
        ))}
      </div>
    </div>
  )
}

export default FridgeView
