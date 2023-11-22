import React from 'react'

interface ParamsInterface{
    close: () => void;
}

function UnitWarning({ close }: ParamsInterface) {
  return (
    <div>
        <h1>Just a Quick Notice</h1>
        <h2>Our units are now split between 2 locations</h2>
        <h2>Units 301+ are located at our Kings Highway location</h2>
        <h2>Units 1 through 300 are located at 9w</h2>
        <p>Shipping containers 290 - 301 are all located at our 9W location</p>
    </div>
  )
}

export default UnitWarning