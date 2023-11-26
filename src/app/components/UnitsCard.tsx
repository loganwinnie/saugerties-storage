import React, { JSXElementConstructor } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Params {
  unit: {
    type: string;
    description: string;
    image: string;
    price: number;
  };
}

/** A card for a storage unit 
 * 
 * Props:
 * unit: object {
    type: string;
    description: string;
    image: string
    price: number
    }
 *
 * UnitSection -> UnitsCard 
*/
function UnitsCard({ unit }: Params) {
  return (
    <div className='card flex flex-col justify-center items-center '>
      <h1 className='text-2xl m-1 pt-5 font-semibold'>{unit.type}</h1>
      <Image className='center w-auto h-auto' width={150} height={150} src={unit.image} alt={`${unit.type} image`} />
      <h2 className='font-medium text-lg mt-2'>Available</h2>

      <Link className='font-semibold text-2xl mb-4 px-20 btn-blue px-4' href={"/rent"}>Rent Now</Link>
      <h2 className='font-semibold text-3xl mb-4 px-20 text-zinc-900'><sup className='font-medium text-green-600'>$</sup>{unit.price}<sub className='font-medium text-xl bottom-0.5'>/month</sub></h2>
    </div >
  );
}

export default UnitsCard;