import { ReactNode } from 'react'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
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
        <main className="">{children}</main>
      </body>
    </html>
  )
}
