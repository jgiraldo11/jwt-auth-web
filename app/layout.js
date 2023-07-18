import { AuthProvider } from '@/context/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JWT Auth in Next.js',
  description: 'User authentication using Mongo and JWT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
        </body>
    </html>
  )
}
