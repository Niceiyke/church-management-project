"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "@/static/images/logo.png"

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-gray-800'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/' className='text-white text-2xl font-bold'>
            <Image src={Logo} width={40} height={40} alt='Logo' />
        </Link>
        <div className='md:hidden'>
          {isMobileMenuOpen ? (
            <FaTimes size={40} onClick={toggleMobileMenu} className='text-white text-2xl cursor-pointer' />
          ) : (
            <FaBars size={40} onClick={toggleMobileMenu} className='text-white text-2xl cursor-pointer' />
          )}
        </div>
        <div className={`md:flex md:items-center ${isMobileMenuOpen ? 'flex flex-col' : 'hidden'}`}>
          <Link href='/' passHref className='md:ml-4 text-white hover:text-gray-300'>
            Home
          </Link>
          <Link className='md:ml-4 text-white hover:text-gray-300' href='/dashboard' passHref>
            Dashboard
          </Link>
          <Link className='md:ml-4 text-white hover:text-gray-300' href='/services' passHref>
            Services
          </Link>
          <Link className='md:ml-4 text-white hover:text-gray-300' href='/members' passHref>
            Members
          </Link>
          <Link className='md:ml-4 text-white hover:text-gray-300' href='/members/register' passHref>
            Add New Member
          </Link>
          <Link className='md:ml-4 text-white hover:text-gray-300' href='/register' passHref>
            Register staff
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
