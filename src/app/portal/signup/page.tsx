'use client';
import React from "react";
import Portal from "../../components/Portal";

function page() {

    return (
        <div>
            {<Portal registered={false} />}
        </div>);
}

export default page;