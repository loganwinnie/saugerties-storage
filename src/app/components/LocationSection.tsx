import React from 'react';
import LocationCard from './LocationCard';

function LocationSection() {
  return (
    <div className='text-center my-16'>
      <h1 className='text-4xl font-medium pb-4 text-zinc-100'>Find Us</h1>
      <hr className='h-px bg-slate-300 mb-3' />
      <div id='location-section' className='w-full flex flex-grow gap-16 justify-center'>
        <div className='min-w-sm max-w-lg'>
          <LocationCard
            placeId="ChIJu-UiLl2n3YkRaJYmcWtsOGQ"
            address="3064 rt9W, Saugerties, NY, 12477"
            directionsURL="https://www.google.com/maps/dir//saugerties+self+storage/@42.0500179,-74.0400895,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89dda75d2e22e5bb:0x64386c6b71269668!2m2!1d-73.9575829!2d42.0499269?entry=ttu"
            location='3064 Rt 9W'
            units='1 through 300'
          />
        </div>
        <div className='max-w-md'>
          <LocationCard
            placeId="Eig5OTggS2luZ3MgSHd5LCBTYXVnZXJ0aWVzLCBOWSAxMjQ3NywgVVNBIjESLwoUChIJ71QAmnan3YkRZ5HGCWtUK4gQ5gcqFAoSCcleVXSCp92JEfPBETGg659y"
            address="998 Kings Hwy, Saugerties, NY, 12477"
            directionsURL="https://www.google.com/maps/dir//998+Kings+Hwy,+Saugerties,+NY+12477/@42.0559175,-73.9815351,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89dda7769a0054ef:0xc3fc6461810bf0da!2m2!1d-73.9789655!2d42.0559135?entry=ttu"
            location='998 Kings Highway'
            units='301+'
          />
        </div>
      </div >
    </div>
  );
}

export default LocationSection;