'use client'

import styles from './index.module.css'
import { base, patterns } from './parts'

export type CreamProps = {
  pattern: number
  colors: { r: number; g: number; b: number }[]
}

const Cream: React.FC<CreamProps> = ({ pattern, colors }) => {
  const rgbList = colors.map(
    (color) => `rgb(${color.r}, ${color.g}, ${color.b})`
  )
  return (
    <div className={styles['container']}>
      <CreamSvg color="#f5f5f5">{base}</CreamSvg>
      {rgbList.map((rgb, index) => (
        <CreamSvg key={index} color={rgb}>
          {patterns[pattern][index]}
        </CreamSvg>
      ))}
    </div>
  )
}

type CreamSvgProps = {
  children: React.ReactNode
  color: string
}

const CreamSvg: React.FC<CreamSvgProps> = ({ children, color }) => (
  <svg className={styles['parts']} viewBox="0 0 128 128" fill={color}>
    {children}
  </svg>
)

export default Cream
