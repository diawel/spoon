import { Ice } from '@/utils/history'
import styles from './index.module.css'
import { base, patterns } from './parts'
import Image from 'next/image'
import empty from './empty.svg'

export type CellProps = {
  ice?: Ice
  monthLabel?: number
}

const Cell: React.FC<CellProps> = ({ ice, monthLabel }) => {
  const label = monthLabel ? (
    <div className={styles['monthLabel']}>{monthLabel}月</div>
  ) : (
    ''
  )
  if (ice) {
    const { pattern, colors } = ice
    const rgbList = colors.map(
      (color) => `rgb(${color.r}, ${color.g}, ${color.b})`
    )
    return (
      <div className={styles['container']}>
        <CellSvg color="#f5f5f5">{base}</CellSvg>
        {rgbList.map((rgb, index) => (
          <CellSvg key={index} color={rgb}>
            {patterns[pattern][index]}
          </CellSvg>
        ))}
        {label}
      </div>
    )
  } else {
    return (
      <div className={styles['container']}>
        <Image src={empty} alt="empty" className={styles['empty']} />
        {label}
      </div>
    )
  }
}

type CellSvgProps = {
  children: React.ReactNode
  color: string
}

const CellSvg: React.FC<CellSvgProps> = ({ children, color }) => (
  <svg className={styles['parts']} viewBox="0 0 48 64" fill={color}>
    {children}
  </svg>
)

export default Cell
