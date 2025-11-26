import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { NextAuthProvider } from '@/components/Providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'MongoDB CRUD',
  description: 'Create, Read, Update, and Delete in MongoDB',
}

// 1. props에 타입 정의 추가 ({ children: React.ReactNode })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* 2. 존재하지 않는 inter 대신 geistSans와 geistMono 변수 사용 */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
          <div className="max-w-3xl mx-auto p-4">
            <Navbar />
            <div className="mt-8">{children}</div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
