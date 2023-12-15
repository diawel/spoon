'use client'

import { useEffect, useState } from 'react'
import FinderView from './FinderView'
import { Ice, dateToDbDate, history } from '@/utils/history'
import ResultView from './ResultView'
import { getFlavorName } from './server'

export type CaptureData = {
  date: Date
  image: Blob
  flavor?: string
  colors?: { r: number; g: number; b: number }[]
  pattern: number
}

const Today: React.FC = () => {
  const [captureData, setCaptureData] = useState<CaptureData | null>(null)
  const [ready, setReady] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    history.days
      .get(dateToDbDate(new Date()))
      .then((today: Ice | undefined) => {
        if (today) setCaptureData(today)
        else setCaptureData(null)
        setReady(true)
      })
  }, [])

  useEffect(() => {
    if (captureData && !captureData.flavor) {
      if (captureData.colors) {
        const colors = captureData.colors
        const rgbToHex = ({ r, g, b }: { r: number; g: number; b: number }) =>
          `#${('0' + r.toString(16)).slice(-2)}${('0' + g.toString(16)).slice(
            -2
          )}${('0' + b.toString(16)).slice(-2)}`
        getFlavorName(
          rgbToHex(colors[0]),
          rgbToHex(colors[1]),
          rgbToHex(colors[2])
        ).then((flavor) => {
          setCaptureData({
            ...captureData,
            flavor,
          })
          history.days.put({
            ...captureData,
            colors,
            dateString: dateToDbDate(captureData.date),
            flavor,
          })
        })
      } else {
        const extractColors = async (src: ImageData) => {
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

          const rgbToHsv = ({
            r,
            g,
            b,
          }: {
            r: number
            g: number
            b: number
          }) => {
            const v = Math.max(r, g, b),
              d = v - Math.min(r, g, b),
              s = v ? d / v : 0,
              a = [r, g, b, r, g],
              i = a.indexOf(v),
              h = s ? (((a[i + 1] - a[i + 2]) / d + i * 2 + 6) % 6) * 60 : 0

            return { h: h, s: s, v: v / 255 }
          }

          setCaptureData({
            ...captureData,
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
          })
        }
        const image = document.createElement('img')
        image.onload = () => {
          const canvas = document.createElement('canvas')
          canvas.width = image.width
          canvas.height = image.height
          const context = canvas.getContext('2d')
          if (!context) return

          context.drawImage(image, 0, 0, canvas.width, canvas.height)

          extractColors(context.getImageData(0, 0, canvas.width, canvas.height))
          canvas.remove()
        }
        image.src = URL.createObjectURL(captureData.image)
      }
    }
  }, [captureData])

  if (!ready) return <></>
  if (captureData?.colors && !isAnimating)
    return (
      <ResultView
        captureData={{ ...captureData, colors: captureData.colors }}
      />
    )
  return (
    <FinderView
      setCaptureData={(captureData) => {
        setCaptureData(captureData)
        setIsAnimating(true)
        setTimeout(() => {
          setIsAnimating(false)
        }, 2400)
      }}
      image={captureData?.image}
      {...{ isAnimating }}
    />
  )
}

export default Today
