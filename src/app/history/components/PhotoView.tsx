import React from 'react'
import { PhotoViewProps } from '../types/PhotoViewProps'

const PhotoView: React.FC<PhotoViewProps> = ({ selectedElement }) => {
  return (
    <div>
      {selectedElement && (
        <div>
          <p>Name: {selectedElement.name}</p>
          <p>Color: {selectedElement.color}</p>
          <p>Image: {selectedElement.photoUrl}</p>
        </div>
      )}
    </div>
  )
}

export default PhotoView
