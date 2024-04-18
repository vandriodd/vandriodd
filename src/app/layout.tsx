import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luz Saavedra Frontend developer | UX/UI designer',
  description: 'Frontend developer and UX/UI designer',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
