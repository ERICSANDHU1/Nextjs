// File: app/layout.js

import { Inter } from 'next/font/google'
import './globals.css' // ✅ Correct relative path

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eric sandhu Admin Dashboard',
  description: 'Next.js ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
