import Image from 'next/image'
import React from 'react'
import { PhotoViewProps } from '../types/PhotoViewProps'
import styles from './PhotoView.module.css'

const PhotoView: React.FC<PhotoViewProps> = ({ selectedElement }) => {
  return (
    <div>
      {selectedElement && (
        <div>
          <div className={styles.container}>
            <div>
              <p className={styles.day}>
                {selectedElement.dateAdded.getDate()}/
                {selectedElement.dateAdded.getDate()}
              </p>
              <Image
                className={styles.photo}
                src="/test.JPG"
                width={275}
                height={275}
                alt="photo before ice cream"
              />
              <p className={styles.photo_name}>{selectedElement.name}</p>
            </div>
            {/* <Image src={selectedElement.photoUrl} alt="photo before ice cream" /> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotoView
