import './globals.css'
import Link from 'next/link'
import ActiveLink from '@/components/alink'

export const metadata = {
  title: '.Vocab',
  description: 'A Words Database',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <nav className='p-5 border-b-2 border-gray flex justify-around'>
          <ul>
            <Link href="/" className='like font-bold'>.Vocab</Link>
          </ul>
          <ul className='flex gap-10 text-gray-light'>
            <ActiveLink href="/saved" name="Saved" />
            <ActiveLink href="/about" name="About" />
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
