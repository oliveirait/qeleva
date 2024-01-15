import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QEleva Concursos',
  description: 'Seja bem vindo(a) ao Qeleva Concursos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
