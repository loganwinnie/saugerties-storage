import React from 'react'
import LocationCard from './LocationCard'

function LocationSection() {
  return (
    <div id='location-section'>LocationSection
         <LocationCard 
      placeId="ChIJu-UiLl2n3YkRaJYmcWtsOGQ" 
      address="3064 rt9W, Saugerties, NY, 12477"
      directionsURL="https://www.google.com/maps/dir//saugerties+self+storage/@42.0500179,-74.0400895,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89dda75d2e22e5bb:0x64386c6b71269668!2m2!1d-73.9575829!2d42.0499269?entry=ttu"
      location='9W'
      />
      <LocationCard 
        placeId="Eig5OTggS2luZ3MgSHd5LCBTYXVnZXJ0aWVzLCBOWSAxMjQ3NywgVVNBIjESLwoUChIJ71QAmnan3YkRZ5HGCWtUK4gQ5gcqFAoSCcleVXSCp92JEfPBETGg659y" 
      address="998 Kings Hwy, Saugerties, NY, 12477"
        directionsURL="https://www.google.com/maps/dir//998+Kings+Hwy,+Saugerties,+NY+12477/@42.0559175,-73.9815351,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89dda7769a0054ef:0xc3fc6461810bf0da!2m2!1d-73.9789655!2d42.0559135?entry=ttu"
      location='Kings Highway'
      />
      </div>
  )
}

export default LocationSection