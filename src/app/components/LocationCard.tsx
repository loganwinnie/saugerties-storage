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
        <div className='card'>
            <h1 className='text-2xl m-1 pt-5 pb-3 font-semibold text-zinc-800'>{location} Location</h1>
            <p className=' mb-5 text-xl font-bold text-[#679CEB] underline bg-zinc-100'>Units {units}</p>
            <iframe
                className='pb-10 px-12 w-full  h-96 w-full rounded'
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_KEY}&q=place_id:${placeId}`}
                allowFullScreen>
            </iframe>
            <a href={directionsURL} className='btn-blue font-semibold py-3'>Get Directions</a>
            <address className='my-7 mx-10'>
                <a href={directionsURL}><h2>{address}</h2></a>
            </address>
        </div>
    );
}

export default LocationCard;