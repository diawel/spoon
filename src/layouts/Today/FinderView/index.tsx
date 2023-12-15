import { useRef } from 'react'
import { CaptureData } from '..'
import Control from './Control'
import Finder from './Finder'
import styles from './index.module.css'
import Image from 'next/image'
import roof from './roof.svg'

export type FinderViewProps = {
  setCaptureData: React.Dispatch<CaptureData>
  image?: Blob
  isAnimating?: boolean
}

const FinderView: React.FC<FinderViewProps> = ({
  setCaptureData,
  image,
  isAnimating,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const processImage = (
    source: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement,
    width: number,
    height: number
  ) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')
    if (!context) return

    context.drawImage(source, 0, 0, canvas.width, canvas.height)
    canvas.toBlob((blob) => {
      if (!blob) return
      setCaptureData({
        date: new Date(),
        image: blob,
        pattern: Math.floor(Math.random() * 5),
      })
      canvas.remove()
    })
  }

  const onCapture = () => {
    const video = videoRef.current
    if (!video) return

    processImage(video, video.videoWidth, video.videoHeight)
  }

  const loadFile = (file: File) => {
    const image = document.createElement('img')
    image.onload = () => {
      const canvas = document.createElement('canvas')
      let scale = Math.max(image.width, image.height) / 512
      canvas.width = Math.floor(image.width / scale)
      canvas.height = Math.floor(image.height / scale)
      const context = canvas.getContext('2d')
      if (!context) return

      context.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        canvas.width,
        canvas.height
      )
      processImage(canvas, canvas.width, canvas.height)
    }
    image.src = URL.createObjectURL(file)
  }

  return (
    <div
      className={
        styles['container'] + (isAnimating ? ` ${styles['slideOut']}` : '')
      }
    >
      <div className={styles['roof-container']}>
        <Image src={roof} alt="roof" priority />
      </div>
      <div className={styles['finder-container']}>
        <div className={styles['finder-innerContainer']}>
          <Finder {...{ videoRef, image, isAnimating }} />
        </div>
      </div>
      <Control {...{ onCapture, loadFile, isAnimating }} />
    </div>
  )
}

export default FinderView
