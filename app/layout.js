import 'server-only';
import { Poppins } from 'next/font/google'
import './globals.css'
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '500'] })

export const metadata = {
  title: 'dotVocab',
  description: 'Finding words made pretty, and easy.',
}

export default function RootLayout({ children }) {
  const themeScript = `try {
    var theme = localStorage.getItem('theme');
    if (theme ? theme === 'light' : window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.documentElement.classList.add('light');
    }
  } catch (e) {}`;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} text-fg bg-bg`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  )
}
