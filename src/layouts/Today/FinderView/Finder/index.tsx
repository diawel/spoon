'use client'

import { useEffect, useRef } from 'react'
import styles from './index.module.css'

export type FinderProps = {
  videoRef: React.RefObject<HTMLVideoElement>
  isAnimating?: boolean
}

const Finder: React.FC<FinderProps> = ({ videoRef, isAnimating }) => {
  const videoStreamRef = useRef<MediaStream | null>(null)

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
          video.srcObject = stream
          videoStreamRef.current = stream
        })
    }

    return () => {
      if (videoStreamRef.current)
        videoStreamRef.current.getTracks().forEach((track) => track.stop())
    }
  }, [videoRef])

  if (isAnimating) videoRef.current?.pause()

  return (
    <div className={styles['container']}>
      <video
        className={styles['video']}
        ref={videoRef}
        autoPlay
        muted
        playsInline
      />
      {isAnimating && (
        <video
          className={styles['disher']}
          autoPlay
          muted
          playsInline
          src="/assets/disher.mov"
        />
      )}
    </div>
  )
}

export default Finder
