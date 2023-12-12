'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import styles from './page.module.css'
import { IceCellDataProps } from './types/IceCellDataProps'

const FridgeView = dynamic(() => import('./components/FridgeView'), {
  ssr: false,
})
const PhotoView = dynamic(() => import('./components/PhotoView'), {
  ssr: false,
})

export default function Home() {
  // ダミーデータ, あとで変更する
  const iceCellData: IceCellDataProps[] = [
    {
      name: '味の名前',
      color: '#B8E1ED',
      photoUrl: 'https://example.com/icecream1.jpg',
      dateAdded: new Date(),
    },
    {
      name: 'Ice Cream 2',
      color: '#FFAAAA',
      photoUrl: 'https://example.com/icecream2.jpg',
      dateAdded: new Date(),
    },
  ]

  const [selectedElement, setSelectedElement] =
    useState<IceCellDataProps | null>(null)

  const handleIceCellTap = (element: IceCellDataProps) => {
    setSelectedElement(element)
  }

  return (
    <main className={styles.main}>
      ここは/historyです
      <div>
        <FridgeView onIceCellTap={handleIceCellTap} historyData={iceCellData} />
        <PhotoView selectedElement={selectedElement} />
      </div>
    </main>
  )
}
