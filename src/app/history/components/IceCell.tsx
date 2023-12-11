import React from 'react'
import { IceCellProps } from '../types/IceCellProps'

const IceCell: React.FC<IceCellProps> = ({ iceCell, onIceCellTap }) => {
  const handleTap = () => {
    onIceCellTap(iceCell)
  }

  return (
    <div onClick={handleTap}>
      <p>Name: {iceCell.name}</p>
      <p>Color: {iceCell.color}</p>
      <p>Date Added: {iceCell.dateAdded.toString()}</p>
    </div>
  )
}

export default IceCell
