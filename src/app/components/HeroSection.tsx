import React from 'react'
import Link from 'next/link';

function HeroSection() {
  return (
    <div id="hero-section" className=' bg-slate-950 /50'style={{
    backgroundImage: "url(/Hero-background.jpg)", }}>
      <div className='bg-slate-950/50'>
        <h1 className='text-center text-2xl'>Affordable</h1>
      <h2 className='text-center text-2xl'>Accessible</h2>
      <h3 className='text-center text-2xl'>Self Storage</h3>
      <h3 className='text-center text-2xl'>Rent By Phone:</h3>
      <a className='text-center text-2xl' href="tel:+1-845-594-4064"><h2>(845) 594-4064</h2></a>
      </div>
      <div className='
      grid place-content-center 
      place-items-center 
      gap-2 grid-rows-1 
      grid-flow-row-dense'>
        <Link className='btn-blue col-span-2' href={"/rent"}>Rent Now</Link>
        <Link className='btn-blue ' href={"/portal/login"}>Login</Link>
        <Link className='btn-blue' href={"/portal/signup"}>Sign Up</Link>
      </div>
    </div>
  )
}

export default HeroSection