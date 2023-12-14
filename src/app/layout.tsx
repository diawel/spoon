import type { Metadata } from 'next'
import { Kaisei_Opti } from 'next/font/google'
import './globals.css'
import styles from './layout.module.css'

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
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${KaiseiOptiFont.className} ${styles.container}`}>
        <div className={styles.display}>
          <div className={styles.inner}>{children}</div>
        </div>
      </body>
    </html>
  )
}
