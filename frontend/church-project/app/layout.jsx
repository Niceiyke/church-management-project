
import Navbar from '@/components/Navbar'

import '@/styles/globals.css'

import localFont from 'next/font/local'


export const metadata = {
  title: 'Winners Chapel 9th Mile',
  description: 'Home of Signs and Wonders',
  
}

const myFont = localFont({
  src: '../static/fonts/Oswald.ttf',
  display: 'swap'
})

const CustomFont = localFont({
  src: '../static/fonts/Nunito.ttf',
  subsets: ['latin'],
  display: 'swap'
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={CustomFont.className} >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
