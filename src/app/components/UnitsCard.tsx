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
      <h1 className='heading1 mt-12'>{unit.type}</h1>
      <Image className='center w-auto h-auto' width={150} height={150} src={unit.image} alt={`${unit.type} image`} />

      <Link className='btn-main my-8' href={"/rent"}>Rent Now</Link>
      <h2 className='font-semibold text-3xl mb-4 px-20 text-zinc-900'><sup className='font-medium text-cyan'>$</sup>{unit.price}<sub className='font-medium text-xl bottom-0.5'>/month</sub></h2>
    </div >
  );
}

export default UnitsCard;