import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AppNavbar from './AppNavbar'
import StickyLink from './StickyLink'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saeid Radmehr',
  description: 'Saeid&quot;s professional portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`{inter.className} bg-gray-800`}>
        <AppNavbar/>
        <div>
          {children}
        </div>
        <StickyLink/>
      </body>
    </html>
  )
}
