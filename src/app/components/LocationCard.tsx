import React from 'react'
const GOOGLE_MAPS_KEY = process.env.GOOGLE_MAPS_API_KEY

interface Location {
    placeId: string,
    directionsURL: string,
    location: string,
    address: string
}

function LocationCard({placeId, directionsURL, location, address} :Location) {
    
    return (
        <div>
        <h1>{location}</h1>
        <iframe
        width="100%"
        height="100%"
        referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_KEY}&q=place_id:${placeId}`}
        allowFullScreen>
      </iframe>
            <a href={directionsURL}>Get Directions</a>
        <address>
        <a href={directionsURL}><h2>{address}</h2></a>
        </address>
        </div>
  )
}

export default LocationCard