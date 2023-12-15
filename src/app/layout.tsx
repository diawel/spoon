import type { Metadata, Viewport } from 'next'
import { Kaisei_Opti } from 'next/font/google'
import './globals.css'
import styles from './layout.module.css'
import effect from '@/components/Icecream/effect.png'
import disher from '@/layouts/Today/FinderView/Finder/disher.png'
import empty from '@/layouts/Today/FinderView/Finder/empty.png'

const KaiseiOptiFont = Kaisei_Opti({
  weight: '700',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Spoon',
  description: '毎日をひんやり記録します。',
  appleWebApp: {
    title: 'Spoon',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#f5f5f5',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preload" href={effect.src} as="image" />
        <link rel="preload" href={disher.src} as="image" />
        <link rel="preload" href={empty.src} as="image" />
      </head>
      <body className={`${KaiseiOptiFont.className} ${styles['container']}`}>
        <div className={styles['display']}>
          <div className={styles['inner']}>{children}</div>
        </div>
      </body>
    </html>
  )
}
