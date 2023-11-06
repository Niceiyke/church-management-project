import React from 'react'
import logo from '@/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='bg-gray-300'>
        <Image
            src={logo}
            width={40}
            quality={80}
            placeholder='blur'
            alt="logo"
        />
        <div className=''>
            <Link href='/' className='p-2 text-lg font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md'>Home</Link>
            <Link href='/dashboard' className='p-2 text-lg font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md'>Dashboard</Link>
        </div>
    </nav>
  )
}

export default Navbar