import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luz Saavedra Frontend developer | UX/UI designer',
  description: 'Frontend developer and UX/UI designer'
  // icons: {
  //   icon: '/favicon.ico'
  // }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}
