'use client'
import React, { use, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMenu, IoClose } from "react-icons/io5";


function NavBar() {
  let width : boolean
  const [open , setOpen] = useState<boolean>(false)
const [clickable, setClickable] = useState(width || false)

  useEffect(() => {
    function resize() {
        if (typeof window !== "undefined") {
          width =  window.innerWidth < 768
         }
      if(width)
       setClickable(true)
      else {
        setClickable(false)
      }
    }

    window.addEventListener('resize', resize)
  }, [setOpen])

  return (
    <header onClick={()=>clickable ? setOpen(o => !o) : false}  className={`nav-bar sticky top-0 z-20 bg-neutral-100 flex justify-between items-center px-[4%]  ${clickable ? "cursor-pointer" : ""} `}>
      <a href="/#hero-section">
        <Image className='block' src="./TextMark.svg" width="90" height="100" alt=" Logo" />
      </a>

      <nav  className={` ${open ? "block " : "hidden" } bg-neutral-100 md:flex justify-center items-center `}>
        <ul className=' md:flex items-center justify-between gap-4 flex-wrap'>
        <Link className="nav-link" href="/#hero-section" >Home</Link>
        <Link className="nav-link" href="/#unit-section" >Units</Link>
        <Link className="nav-link" href="/#location-section" >Find Us</Link>
         <Link className='block border-2 px-2 py-2 text-lg font-semibold rounded-full border-emerald-500 hover:bg-neutral-200' href="/rent">Rent Now</Link>
        </ul>
      </nav>

      <IoMenu className={`${!clickable ? "invisible" : "block"}  ${open ? "hidden" : "block"} pointer-events-none`} /> <IoClose className={`${open ? "block" : "hidden"}  pointer-events-none w-6 h-6`} />

    </header>
  );
      // <div>
      //   <a href="/#hero-section">
      //     <Image className='block'src="./TextMark.svg" width="80" height="200" alt="Saugerties Self Storage Logo" />
      //   </a>
      // </div>
      // <IoMenu className="md:hidden inline h-6 w-6 cursor-pointer" />

      // <div className={`grow pt-3 lg:w-full md:flex ${open ? "flex flex-col" : "hidden"} w-auto justify-between items-center`}>
      //   <div className={`flex ${open ? "flex-col" : ""} grow justify-center space-x-4`}>
      //     <Link className="block" href="/#hero-section" >Home</Link>
      //     <Link href="/#unit-section" >Units</Link>
      //     <Link href="/#location-section" >Find Us</Link>
      //   </div>
      //   <div className='border-2 px-2 py-2 rounded-full border-emerald-500 hover:bg-neutral-100'>
      //     <Link href="/rent">Rent Now</Link>
      //   </div>
      // </div>
}

export default NavBar;