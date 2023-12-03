import React from 'react';
const GOOGLE_MAPS_KEY = process.env.GOOGLE_MAPS_API_KEY;

interface Location {
    placeId: string,
    directionsURL: string,
    location: string,
    address: string;
    units: string;
}

function LocationCard({ placeId, directionsURL, location, address, units }: Location) {

    return (
        <div className='card px-8'>
            <h1 className='text-2xl m-1 pt-5 pb-3 font-semibold text-zinc-800'>{location} Location</h1>
            <p className=' mb-5 mx-16 py-2 bg-green text-xl font-bold text-white-100 rounded'>Units {units}</p>
            <iframe
                className='mb-10 w-full h-96 border-4 rounded-lg'
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_KEY}&q=place_id:${placeId}`}
                allowFullScreen>
            </iframe>
            <a href={directionsURL} className='btn-secondary'>Get Directions</a>
            <address className='my-7 mx-10'>
                <a href={directionsURL}><h2>{address}</h2></a>
            </address>
        </div>
    );
}

export default LocationCard;