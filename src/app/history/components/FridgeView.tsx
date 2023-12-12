import { FridgeViewProps } from '../types/FridgeViewProps'
import { IceCellDataProps } from '../types/IceCellDataProps'
import styles from './FridgeView.module.css'
import IceCell from './IceCell'

export const FridgeView: React.FC<FridgeViewProps> = ({
  historyData,
  onIceCellTap,
}) => {
  const handleIceCellTapInternal = (element: IceCellDataProps) => {
    onIceCellTap(element)
  }

  return (
    <div className={styles.fridge}>
      {historyData.map((element, i) => (
        <IceCell
          key={i}
          iceCell={element}
          onIceCellTap={handleIceCellTapInternal}
        />
      ))}
    </div>
  )
}

export default FridgeView
