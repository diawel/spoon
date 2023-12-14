'use client'

import { useEffect, useState } from 'react'
import FinderView from './FinderView'
import { history } from '@/utils/history'
import ResultView from './ResultView'
import { getFlavorName } from './server'

export type CaptureData = {
  date: Date
  image: Blob
  flavor?: string
  colors: { r: number; g: number; b: number }[]
  pattern: number
}

const Today: React.FC = () => {
  const [captureData, setCaptureData] = useState<CaptureData | null>(null)
  const [ready, setReady] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const now = new Date()
    history.days
      .get(
        `${now.getFullYear()}-${(now.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`
      )
      .then((today) => {
        if (today) setCaptureData(today)
        else setCaptureData(null)
        setReady(true)
      })
  }, [])

  useEffect(() => {
    if (captureData && !captureData.flavor) {
      // getFlavorName(
      //   captureData.colors.map(
      //     ({ r, g, b }) =>
      //       `#${('0' + r.toString(16)).slice(-2)}${('0' + g.toString(16)).slice(
      //         -2
      //       )}${('0' + b.toString(16)).slice(-2)}`
      //   )
      // ).then((flavor) => {
      //   setCaptureData({
      //     ...captureData,
      //     flavor,
      //   })
      // })

      setCaptureData({
        ...captureData,
        flavor: 'テスト用',
      })
    }
  }, [captureData])

  if (!ready) return <></>
  if (captureData && !isAnimating) return <ResultView {...{ captureData }} />
  return (
    <FinderView
      setCaptureData={(captureData) => {
        setCaptureData(captureData)
        setIsAnimating(true)
        setTimeout(() => {
          setIsAnimating(false)
        }, 2000)
      }}
      {...{ isAnimating }}
    />
  )
}

export default Today
