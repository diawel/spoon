import React from 'react'
import styles from './FridgeView.module.css'
import IceCell from './IceCell/IceCell'
import { Ice } from '@/utils/history'

type FridgeViewProps = {
  historyData: Ice[]
  onIceCellTap: (element: Ice) => void
}

export const FridgeView: React.FC<FridgeViewProps> = ({
  historyData,
  onIceCellTap,
}) => {
  const handleIceCellTapInternal = (element: Ice) => {
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
