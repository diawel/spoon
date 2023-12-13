import React, { useState } from 'react'
import styles from './TabViewButton.module.css'

const TabViewButton: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false)

  const handleButtonClick = (): void => {
    setIsOn((prevIsOn) => !prevIsOn)
  }

  return (
    <div>
      <button
        className={`${styles.toggleButton} ${isOn ? styles.active : ''}`}
        onClick={handleButtonClick}
      >
        <div className={styles.toggleTrack}>
          <div className={styles.toggleHandle}></div>
        </div>
      </button>
    </div>
  )
}

export default TabViewButton
