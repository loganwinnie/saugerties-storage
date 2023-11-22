import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function NavBar() {
  return (
    <div className='flex justify-between '>
        <div>
        <a href="/#hero-section">
              <Image src="./TextMark.svg" width="80" height="80" alt="Saugerties Self Storage Logo" />
        </a>
        </div>
      <div className='flex grow justify-center space-x-4'>
            <Link href="/#hero-section">Home</Link>
            <Link href="/#unit-section">Units</Link>
            <Link href="/#location-section">location</Link>
        </div>
        <div>
            <Link href="/rent">Rent Now</Link>
        </div>
    </div>
  )
}

export default NavBar