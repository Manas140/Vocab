import 'server-only';
import { Poppins } from 'next/font/google'
import './globals.css'
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'] })

export const metadata = {
  title: 'dotVocab',
  description: 'Finding words made pretty, and easy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-fg bg-bg`}>
        {children}
      </body>
    </html>
  )
}
