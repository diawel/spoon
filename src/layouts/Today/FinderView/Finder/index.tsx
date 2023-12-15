'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import disher from './disher.png'
import Image from 'next/image'
import empty from './empty.png'

export type FinderProps = {
  videoRef: React.RefObject<HTMLVideoElement>
  image?: Blob
  isAnimating?: boolean
}

const Finder: React.FC<FinderProps> = ({ videoRef, image, isAnimating }) => {
  const videoStreamRef = useRef<MediaStream | null>(null)
  const [isEmpty, setIsEmpty] = useState(true)

  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        setIsEmpty(true)
      }, 1000)
    }
  }, [isAnimating, videoRef])

  useEffect(() => {
    const video = videoRef.current
    if (
      video &&
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia
    ) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: 'environment' } })
        .then((stream) => {
          setTimeout(() => {
            setIsEmpty(false)
          }, 1500)
          video.srcObject = stream
          videoStreamRef.current = stream
        })
    }

    return () => {
      if (videoStreamRef.current)
        videoStreamRef.current.getTracks().forEach((track) => track.stop())
    }
  }, [videoRef])

  return (
    <div className={styles['container']}>
      <video
        className={styles['video']}
        ref={videoRef}
        autoPlay
        muted
        playsInline
      />
      {image && (
        <div className={styles['overlay-wrapper']}>
          <Image
            className={styles['video']}
            src={URL.createObjectURL(image)}
            alt="empty"
            width={512}
            height={512}
          />
        </div>
      )}
      <div
        className={styles['overlay-wrapper']}
        style={{ opacity: isEmpty ? 1 : 0 }}
      >
        <Image className={styles['video']} src={empty} alt="empty" priority />
      </div>
      {isAnimating && (
        <Image
          className={styles['disher']}
          src={disher}
          alt="disher"
          priority
          unoptimized
        />
      )}
    </div>
  )
}

export default Finder
