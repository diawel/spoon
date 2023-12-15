import { Ice } from '@/utils/history'
import styles from './index.module.css'
import { base, patterns } from './parts'
import Image from 'next/image'
import empty from './empty.svg'

export type CellProps = {
  ice?: Ice
}

const Cell: React.FC<CellProps> = ({ ice }) => {
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
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <Image src={empty} alt="empty" />
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
