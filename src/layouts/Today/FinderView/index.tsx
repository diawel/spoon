import Control from './Control'
import Finder from './Finder'
import styles from './index.module.css'

const FinderView: React.FC = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['finder-container']}>
        <Finder />
      </div>
      <Control />
    </div>
  )
}

export default FinderView
