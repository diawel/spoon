import styles from './index.module.css'
import { Ice } from '@/utils/history'
import { base, patterns } from './parts'

export type IceCellProps = {
  iceCell: Ice
  onIceCellTap: (element: Ice) => void
}

const IceCell: React.FC<IceCellProps> = ({ iceCell, onIceCellTap }) => {
  const handleTap = () => {
    onIceCellTap(iceCell)
  }

  const rgbList = iceCell.colors.map(
    (color) => `rgb(${color.r}, ${color.g}, ${color.b})`
  )

  return (
    <div onClick={handleTap} className={styles.iceCellContainer}>
      <div className={styles.iceCell}>
        <div>
          <IceCellSvg color={rgbList[0]}>{base}</IceCellSvg>
          <IceCellSvg color={rgbList[1]}>
            {patterns[iceCell.pattern][0]}
          </IceCellSvg>
          <IceCellSvg color={rgbList[2]}>
            {patterns[iceCell.pattern][1]}
          </IceCellSvg>
        </div>
        {/* 月全体で最後の月の場合にのみ下の要素を当てる */}
        <div className={styles.month}>{iceCell.date.getMonth() + 1}月</div>
      </div>
    </div>
  )
}

type IceCellSvgProps = {
  children: React.ReactNode
  color: string
}

const IceCellSvg: React.FC<IceCellSvgProps> = ({ children, color }) => (
  <svg className={styles.parts} viewBox="0 0 128 128" fill={color}>
    {children}
  </svg>
)

export default IceCell
