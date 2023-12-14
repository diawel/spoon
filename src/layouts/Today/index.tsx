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
  colors: { r: number; g: number; b: number }[]
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
      getFlavorName(
        captureData.colors.map(
          ({ r, g, b }) =>
            `#${('0' + r.toString(16)).slice(-2)}${('0' + g.toString(16)).slice(
              -2
            )}${('0' + b.toString(16)).slice(-2)}`
        )
      ).then((flavor) => {
        setCaptureData({
          ...captureData,
          flavor,
        })
        history.days.put({
          ...captureData,
          dateString: dateToDbDate(captureData.date),
          flavor,
        })
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
