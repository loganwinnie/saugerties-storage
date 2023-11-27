'use client'
import React, { use, useEffect, useState,  } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMenu, IoClose } from "react-icons/io5";


function NavBar() {
  const [open , setOpen] = useState<boolean>(false)
  const [clickable, setClickable] = useState(true)

  useEffect(() => {
    function resize() {
      setClickable(window.innerWidth < 768)
      if(window.innerWidth < 768 )
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
        <Image className='block md:w-36 w-32' src="./S-Lock-Text.svg" width="150" height="100" alt=" Logo" />
      </a>

      <nav  className={` ${open ? "block " : "hidden" } bg-neutral-100 md:flex justify-center items-center `}>
        <ul className=' md:flex items-center justify-between gap-4 flex-wrap'>
        <Link className="nav-link" href="/#hero-section" >Home</Link>
        <Link className="nav-link" href="/#unit-section" >Units</Link>
        <Link className="nav-link" href="/#location-section" >Find Us</Link>
         <Link className='block border-2 px-2 py-1 hover:border-[#9BD5EB] text-lg text-zinc-200 font-semibold rounded bg-[#21B2E1] hover:bg-[#9BD5EB] border-zinc-200' href="/rent">Rent Now</Link>
        </ul>
      </nav>

      <IoMenu className={`${!clickable ? "invisible" : "block"} md:invisible w-6 h-6 ${open ? "hidden" : "block"} pointer-events-none`} /> <IoClose className={`${open ? "block" : "hidden"}  pointer-events-none w-6 h-6`} />

    </header>
  );

}

export default NavBar;