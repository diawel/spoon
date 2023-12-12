import styles from './index.module.css'

export type ClickProps = {
  onClick: () => void
  children: React.ReactNode
}

const Click: React.FC<ClickProps> = ({ onClick, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onClick()
  }
  return (
    <a onClick={handleClick} href="./" className={styles['click']}>
      {children}
    </a>
  )
}

export default Click
