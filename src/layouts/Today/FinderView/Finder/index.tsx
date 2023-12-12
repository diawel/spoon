'use client'

import { useEffect, useRef } from 'react'
import styles from './index.module.css'

const Finder: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
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
  }, [])

  return (
    <video
      className={styles['video']}
      ref={videoRef}
      autoPlay
      muted
      playsInline
    />
  )
}

export default Finder
