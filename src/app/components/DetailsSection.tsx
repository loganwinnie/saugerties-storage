import React from "react";

function DetailsSection() {
    return (
        <div className='mt-8 md:mt-0 text-center mb-8'>
            <hr className='w-screen h-0.5 mb-4 bg-white-300' />
            <h1 className='heading1'>Why rent with us</h1>
            <div>
                 <div id='unit-section' className='mt-8 px-16 w-full flex flex-col  flex-grow flex-wrap justify-center items-center gap-8 text-zinc-900 text-left'>
                    <div className="card max-w-lg px-20 py-4">
                        <h2 className="heading2">24/7 Access</h2>
                        <p className="">Stop by any time 365 days a year, 24 hours a day</p>
                    </div>
                    <div className="card max-w-lg  px-20 py-4">
                        <h2 className="heading2">Guaranteed Rate</h2>
                        <p>Unlike the big guys, our unit rate is guaranteed to stay the same for at least a year after rental.</p>
                    </div>
                    <div className="card max-w-lg  px-20 py-4">
                        <h2 className="heading2">Quick Signup</h2>
                        <p>Rent a unit in the matter of minutes right online.</p>
                    </div>
                    <div className="card max-w-lg  px-20 py-4">
                        <h2 className="heading2">Connivent Locations</h2>
                        <p>With 2 locations in the Saugerties area pick the one that is best for you.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsSection