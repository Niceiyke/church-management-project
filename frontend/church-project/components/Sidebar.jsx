"use client"
import Link from "next/link"
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

function Sidebar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className=" bg-gray-800 md:w-[15%]  text-white">
              <div className='md:hidden'>
          {isMobileMenuOpen ? (
            <FaTimes size={40} onClick={toggleMobileMenu} className='text-white text-2xl cursor-pointer' />
          ) : (
            <FaBars size={40} onClick={toggleMobileMenu} className='text-white text-2xl cursor-pointer' />
          )}
        </div>
       <div className="hidden md:flex flex-col ">
        <Link href='/' className='p-2 text-md font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md' >Home</Link>
        <Link href='/dashboard' className='p-2 text-md font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md'>Dashboard</Link>
        <Link href='/members' className='p-2 text-md font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md'>Members</Link>
        <Link className='p-2 text-md font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md' onClick={toggleMobileMenu} href='/services' passHref>
            Services
          </Link>
        <Link href='/new-converts' className='p-2 text-md font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md'>New Converts</Link>
        <Link href='/members/register' className='p-2 text-md font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md'>Add New Member</Link>
        <Link href='/new-converts/register' className='p-2 text-md font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md'>Add New Convert</Link> 
      </div>
    {
      isMobileMenuOpen &&   <div className="flex md:hidden flex-col left-0 relative ">
      <Link href='/' className='p-2 text-md font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md' onClick={toggleMobileMenu}>Home</Link>
      <Link href='/dashboard' className='p-2 text-md font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md' onClick={toggleMobileMenu}>Dashboard</Link>
      <Link href='/members' className='p-2 text-md font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md' onClick={toggleMobileMenu}>Members</Link>
      <Link className='p-2 text-md font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md' onClick={toggleMobileMenu} href='/services' passHref>
            Services
          </Link>
      <Link href='/new-converts' className='p-2 text-md font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md' onClick={toggleMobileMenu}>New Converts</Link>
      <Link href='/members/register' className='p-2 text-md font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md' onClick={toggleMobileMenu}>Add New Member</Link>
      <Link href='/new-converts/register' className='p-2 text-md font-bold hover:bg-gray-700 hover:text-gray-50 hover:rounded-md' onClick={toggleMobileMenu}>Add New Convert</Link> 
    </div>
    }


    </div>
   
  )
}

export default Sidebar