import { ReactNode } from 'react'
import '../globals.css'
import { Roboto } from 'next/font/google'
import { Header } from '@/components/home/header/Header'
import { Footer } from '@/components/home/footer/Footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
})

export const metadata = {
  title: 'CNC-TECH',
  description: 'em desenvolvimento..',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="py-8 px-5 bg-transparent">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
