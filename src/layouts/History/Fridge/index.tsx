import styles from './index.module.css'
import { Ice } from '@/utils/history'
import Cell from './Cell'

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
        {historyData.map((ice) => (
          <Cell key={ice.dateString} {...{ ice }} />
        ))}
      </div>
    </div>
  )
}

export default FridgeView
