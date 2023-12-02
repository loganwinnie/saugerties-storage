'use client'
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"


const carouselImages = [
     '/Hero-background.jpg',
     '/storage-row.jpg'
]


function ImageCarousel() {
    const [currentImage, setCurrentImage] = useState<number>(0)
    const timeout = useRef<any>(null)
    const length = carouselImages.length

    useEffect(() => {
        resetTimeout()
        timeout.current = setTimeout(changeImage, 5000)
        return () => {
            resetTimeout()
        }
    }, [currentImage,])

    function changeImage() {
        setCurrentImage(image => image < length-1 ? image +1 : 0)
    }

      function resetTimeout() {
        if (timeout.current) {
        clearTimeout(timeout.current);
    }
  }
    return (
        <>
         <Image onClick={changeImage} className='w-full h-full object-cover transition ease duration-1000 delay-100'  width="200" height="100" alt='header Image' src={carouselImages[currentImage]}/>
        </>
    )
}

export default ImageCarousel