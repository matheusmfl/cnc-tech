import { ReactNode } from 'react'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { HelpButton } from '@/components/home/helpButton/HelpButton'

const roboto = Montserrat({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'CNC-TECH',
  description: 'em desenvolvimento..',
}
export const revalidate = 3600
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <HelpButton />
        <main className="font-sans">{children}</main>
      </body>
    </html>
  )
}
