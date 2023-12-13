import React, { useState } from 'react'
import styles from './TodayIceButton.module.css'

const TodayIceButton: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false)

  const handleButtonClick = (): void => {
    setIsOn((prevIsOn) => !prevIsOn)
  }

  return (
    <div>
      <p>今日のアイス</p>
    </div>
  )
}

export default TodayIceButton
