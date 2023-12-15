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
    <div className={styles.container}>
      <CreamSvg color="#f5f5f5">{base}</CreamSvg>
      <CreamSvg color={rgbList[0]}>{patterns[pattern][0]}</CreamSvg>
      <CreamSvg color={rgbList[1]}>{patterns[pattern][1]}</CreamSvg>
      <CreamSvg color={rgbList[2]}>{patterns[pattern][2]}</CreamSvg>
    </div>
  )
}

type CreamSvgProps = {
  children: React.ReactNode
  color: string
}

const CreamSvg: React.FC<CreamSvgProps> = ({ children, color }) => (
  <svg className={styles.parts} viewBox="0 0 128 128" fill={color}>
    {children}
  </svg>
)

export default Cream
