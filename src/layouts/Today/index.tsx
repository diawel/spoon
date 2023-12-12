'use client'

import { useEffect, useState } from 'react'
import FinderView from './FinderView'
import { history } from '@/utils/history'

const Today: React.FC = () => {
  const [captureData, setCaptureData] = useState<{
    date: Date
    image: Blob
    flavor?: string
    colors: { r: number; g: number; b: number }[]
  } | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const now = new Date()
    history.days
      .get(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`)
      .then((today) => {
        if (today) setCaptureData(today)
        else setCaptureData(null)
        setReady(true)
      })
  }, [])

  if (!ready) return null
  if (captureData) return <div>TODO: show capture data</div>
  return <FinderView />
}

export default Today
