import clsx from 'clsx'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CreateTacticSheet } from './CreateTacticSheet'
import { Providers } from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <header className="fixed w-full bg-blue-800 p-4 flex justify-between items-center">
          <a href="/">
            <h1 className="text-2xl">FC Tactics 24</h1>
          </a>
          <CreateTacticSheet />
        </header>
        <div className="pt-16">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
