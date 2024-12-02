import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { AppProvider } from '@/context/AppContext'
import { ResultProvider } from '@/context/ResultContext'

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
    <html lang="pt-br" className='pt-16 bg-gradient-to-t from-black bg-red-950' >
      <body className={montserrat.className} >
        <AppProvider>
          <ResultProvider>
            <Header />
            {children}
          </ResultProvider>
        </AppProvider>
      </body> 
    </html>
  )
}
