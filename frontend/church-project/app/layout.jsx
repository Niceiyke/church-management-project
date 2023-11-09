import Navbar from '@/components/Navbar'

import '@/styles/globals.css'
import {Nunito } from 'next/font/google'

export const metadata = {
  title: 'Winners Chapel 9th Mile',
  description: 'Home of Signs and Wonders',
}

const CustomFont =Nunito({
  subsets:['latin'],
  display:'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={CustomFont.className} >
      <Navbar/>
        {children}
        </body>
    </html>
  )
}
