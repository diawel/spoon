import styles from './index.module.css'

export type ClickProps = {
  onClick: () => void
  children: React.ReactNode
  plain?: boolean
}

const Click: React.FC<ClickProps> = ({ onClick, children, plain }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onClick()
  }
  return (
    <a
      onClick={handleClick}
      href="./"
      className={styles['click']}
      style={plain ? { WebkitTapHighlightColor: 'transparent' } : {}}
    >
      {children}
    </a>
  )
}

export default Click
