import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './layout.module.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'spoon',
  description: '毎日をひんやり記録します。',
  appleWebApp: {
    title: 'spoon',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${styles.container}`}>
        <div className={styles.display}>
          <div className={styles.inner}>{children}</div>
        </div>
      </body>
    </html>
  )
}
