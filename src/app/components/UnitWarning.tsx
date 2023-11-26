import React from 'react'
import Link from 'next/link';

interface ParamsInterface{
    close: () => void;
}

function UnitWarning({ close }: ParamsInterface) {
  return (
    <div className='p-10 mt-20 md:mt-5 absolute bg-neutral-100 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex  flex-col border-2 drop-shadow-xl'>
        <p className='text-center text-3xl pb-8 font-semibold'>Just a Quick Notice</p>
        <p className='text-center text-xl pb-8 font-medium'>Our units are now split between 2 locations</p>
        <p className='text-center text-xl '>Units 1 through 300 are located at 9w.</p>
        <p className='text-center text-xl pb-12'>Units 301+ are located at our Kings Highway location.</p>
        <p className='text-center text-md pb-20'>Shipping containers 290 - 301 are all located at our 9W location</p>
        <button className='btn-blue ' onClick={close}>Close</button>
        <Link className='btn-blue bg-zinc-300 hover:bg-zinc-100 text-zinc-900 mt-4 mx-20 text-center' href="/#location-section" >Directions</Link>
    </div>
  )
}

export default UnitWarning