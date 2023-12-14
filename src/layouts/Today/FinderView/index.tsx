import { useRef } from 'react'
import { CaptureData } from '..'
import Control from './Control'
import Finder from './Finder'
import styles from './index.module.css'
import Image from 'next/image'
import roof from './roof.svg'

export type FinderViewProps = {
  setCaptureData: React.Dispatch<CaptureData>
  isAnimating?: boolean
}

const FinderView: React.FC<FinderViewProps> = ({
  setCaptureData,
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
      const extractColors = async () => {
        const src = context.getImageData(0, 0, canvas.width, canvas.height) // 色を抽出
        const pixels = []
        for (let x = 0; x < src.width; x += 4) {
          for (let y = 0; y < src.height; y += 4) {
            const i = (y * src.width + x) * 4
            const r = src.data[i + 0]
            const g = src.data[i + 1]
            const b = src.data[i + 2]
            pixels.push([r, g, b])
          }
        }

        let chosenPixels = [] // ランダムに代表を抽出
        const candidates = [...pixels]
        for (let i = 0; i < 12; i++) {
          const arrayIndex = Math.floor(Math.random() * candidates.length)
          chosenPixels.push(candidates[arrayIndex])
          candidates.splice(arrayIndex, 1)
        }

        const abs = (color1: number[], color2: number[]): number =>
          (color1[0] - color2[0]) ** 2 +
          (color1[1] - color2[1]) ** 2 +
          (color1[2] - color2[2]) ** 2

        for (let loop = 0; loop < 100; loop++) {
          const groupIndexes: number[] = []
          for (const pixel of pixels) {
            const distances = []
            for (const chosenPixel of chosenPixels)
              distances.push(abs(pixel, chosenPixel))
            groupIndexes.push(distances.indexOf(Math.min(...distances)))
          }

          const groupIndexCount = [...Array(chosenPixels.length)].map(
            (_, i) => groupIndexes.filter((x) => x == i).length
          )

          chosenPixels = [...Array(chosenPixels.length)].map((_) => [0, 0, 0])

          for (let i = 0; i < pixels.length; i++) {
            chosenPixels[groupIndexes[i]][0] +=
              pixels[i][0] / groupIndexCount[groupIndexes[i]]
            chosenPixels[groupIndexes[i]][1] +=
              pixels[i][1] / groupIndexCount[groupIndexes[i]]
            chosenPixels[groupIndexes[i]][2] +=
              pixels[i][2] / groupIndexCount[groupIndexes[i]]
          }
        }

        const rgbToHsv = ({ r, g, b }: { r: number; g: number; b: number }) => {
          const v = Math.max(r, g, b),
            d = v - Math.min(r, g, b),
            s = v ? d / v : 0,
            a = [r, g, b, r, g],
            i = a.indexOf(v),
            h = s ? (((a[i + 1] - a[i + 2]) / d + i * 2 + 6) % 6) * 60 : 0

          return { h: h, s: s, v: v / 255 }
        }

        setCaptureData({
          date: new Date(),
          image: blob,
          colors: chosenPixels
            .sort((a, b) => {
              const hsvA = rgbToHsv({ r: a[0], g: a[1], b: a[2] })
              const hsvB = rgbToHsv({ r: b[0], g: b[1], b: b[2] })
              return hsvB.v + hsvB.s - (hsvA.v + hsvA.s)
            })
            .slice(0, 3)
            .map((color) => ({
              r: color[0],
              g: color[1],
              b: color[2],
            })),
          pattern: Math.floor(Math.random() * 5),
        })
      }
      extractColors()
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
      canvas.width = Math.floor(image.width / 10)
      canvas.height = Math.floor(image.height / 10)
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
        <Image src={roof} alt="roof" />
      </div>
      <div className={styles['finder-container']}>
        <div className={styles['finder-innerContainer']}>
          <Finder {...{ videoRef, isAnimating }} />
        </div>
      </div>
      <Control {...{ onCapture, loadFile, isAnimating }} />
    </div>
  )
}

export default FinderView
