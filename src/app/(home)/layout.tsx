import { ReactNode } from 'react'
import '../globals.css'
import { Roboto } from 'next/font/google'
import { Header } from '@/components/home/header/Header'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
})

export const metadata = {
  title: 'CNC-TECH',
  description: 'em desenvolvimento...',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <main className="py-8 px-5">
        <body className={roboto.className}>
          <Header />
          {children}
        </body>
      </main>
    </html>
  )
}
