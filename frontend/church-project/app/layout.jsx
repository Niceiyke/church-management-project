import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export const metadata = {
  title: 'Winners Chapel 9th Mile',
  description: 'Home of Signs and Wonders',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body >
      <Navbar/>
        {children}</body>
    </html>
  )
}
