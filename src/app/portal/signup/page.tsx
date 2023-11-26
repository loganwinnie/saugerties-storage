'use client';
import React from "react";
import Portal from "../../components/Portal";

function page() {

    return (
        <div >
            <div className="text-center mx-4 sticky-top">
                <p className="text-zinc-100 font-semibold">Rented up over the phone?</p>
                <p className="text-zinc-100">Unit number and Account number were sent to you in an email</p>
            </div>
            {<Portal registered={false} />}
        </div>);
}

export default page;