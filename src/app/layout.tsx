import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Kanit, Monoton } from 'next/font/google'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import './globals.css'

export const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const kanit_bold = Kanit({
  weight: '800',
  subsets: ['latin'],
  display: 'swap',
})

export const monoton = Monoton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const metadata: Metadata = {
  title: 'Carlos Bueno',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <header>
        <title>Carlos Bueno</title>
      </header>
      <body className={`${kanit.className} antialiased`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
