import React from 'react'
import Link from 'next/link';

function HeroSection() {
  return (
    <div id="hero-section" style={{
    backgroundImage: "url(/Hero-background.jpg)", 
    width: "100vw", 
    height: "40vh"}}>
        <h1>Affordable</h1>
        <h2>Accessible</h2>
        <h3>Self Storage</h3>
      <h3>Rent By Phone:</h3>
      <a href="tel:+1-845-594-4064">(845) 594-4064</a>

        <Link href={"/rent"}>Rent Now</Link>
        <Link href={"/portal/login"}>Login</Link>
        <Link href={"/portal/signup"}>Sign Up</Link>
    </div>
  )
}

export default HeroSection