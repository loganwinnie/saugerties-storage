import React, { JSXElementConstructor } from 'react'
import RentNow from './RentNow'
import Image from 'next/image';

interface Params {
    unit : {
    type: string;
    available: number;
    description: string;
    image: string
    price: number
    }
}

/** A card for a storage unit 
 * 
 * Props:
 * unit: object {
    type: string;
    available: number;
    description: string;
    image: string
    price: number
    }
 *
 * UnitSection -> UnitsCard 
*/
function UnitsCard({unit}: Params) {
  return (
    <div>
        <h1>{unit.type}</h1>
        <Image src={unit.image} alt={`${unit.type} image`}/>
        <h2>Available</h2>
        <h3>{unit.available}</h3>
        <p>{unit.description}</p>
        <RentNow/>
        <h2>{unit.price}</h2>
    </div>
  )
}

export default UnitsCard