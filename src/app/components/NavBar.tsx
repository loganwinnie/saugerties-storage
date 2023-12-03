'use client'
import React, { use, useEffect, useState,  } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMenu, IoClose } from "react-icons/io5";


function NavBar() {
  const [open , setOpen] = useState<boolean>(false)

  useEffect(() => {
    function resize() {
      if(window.innerWidth > 768 ) setOpen(false);
    }
    window.addEventListener('resize', resize)
  },)

  function toggleMenu() {
    setOpen(current => !current)
  }


  return (
    <header className='z-20 fixed block w-full md:flex bg-white-100 block md:justify-between items-center text-center font-semibold text-xl text-dark rounded-b-md md:rounded-none drop-shadow-lg'> 
    <div className='flex justify-between items-center p-4'>
      <Link href="/#hero-section">
        <Image className='block w-36 md:w-48' src="./S-Lock-Text.svg" width="150" height="100" alt=" Logo" />
      </Link>
      <IoMenu onClick={toggleMenu}  className={`${open ? "hidden" : "block"} w-16 h-6 block md:hidden`}  />
      <IoClose onClick={toggleMenu}  className={`${open ? "block" : "hidden"} w-16 h-6 block md:hidden`}  />
    </div>

    {/* Bar View */}
    <div className='hidden md:flex flex-col md:flex-row gap-2 font-bold'>
      <Link onClick={toggleMenu} href="/#header">Home</Link>
      <Link onClick={toggleMenu} href="/#unit-section" >Units</Link>
      <Link onClick={toggleMenu} href="/#location-section">Location</Link>
    </div>

    <Link onClick={toggleMenu} className='hidden md:block mx-8 py-2 px-4 btn-main' href="/rent">Rent Now</Link>

    {/* Dropdown View */}
    <div className={`${open ? "flex" : "hidden"} pt-2 flex-col flex-row md:hidden md:items-center gap-2 font-bold`}>
      <div className='flex md:hidden flex-col md:flex-row gap-4'>
        <Link onClick={toggleMenu} href="/#header">Home</Link>
        <Link  onClick={toggleMenu} href="/#unit-section">Units</Link>
        <Link  onClick={toggleMenu} href="/#header">Location</Link>
      </div>

        <Link  onClick={toggleMenu} className='block md:hidden mt-2 p-3 bg-accent-100 active:bg-accent-200 extrabold text-xl text-white-100 rounded-b-md border-t-2 border-white-300' href="#header">Rent Now</Link>
    </div>

    </header>
  );

}

export default NavBar;