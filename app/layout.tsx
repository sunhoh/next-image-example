import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '../components/nav/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Image Optimization',
  description: 'Next.js Image Optimization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border border-solid mx-auto max-w-4xl px-6 lg:max-w-6xl lg:px-8">
          <Nav/>
          {children}
        </div>
        </body>
    </html>
  )
}
