import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function NavBar() {
  return (
    <div>
        <div>
              <Image src="./TextMark.svg" width="80" height="80" alt="Saugerties Self Storage Logo" />
        </div>
        <div>
            <Link href="/units">Units</Link>
            <Link href="/home">Home</Link>
            <Link href="/location">Find Us</Link>
        </div>
        <div>
            <Link href="/rent">Rent Now</Link>
        </div>
    </div>
  )
}

export default NavBar