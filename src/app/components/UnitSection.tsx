import React from 'react'
import UnitsCard from "./UnitsCard"
import { type } from 'os';

const UnitSection =  async() => {
    // const res = await fetch()
  

  return (
    <div>
        <h1>See what we have available</h1>
        <UnitsCard unit={{
            type: "5x10",
            description: "The perfect budget friendly choice for a mid-sized storage solution. Whether you need to store furniture during a home renovation, seasonal items, business inventory, or personal belongings, our 5x10 unit provides the versatility you require. It's an excellent option for both short-term and long-term storage needs.",
            image: "",
            available: 0,
            price: 79
            }}/>
        <UnitsCard unit={{
            type: "10x10",
            description: "Ideal for those seeking a versatile and budget-friendly option for larger items, furniture sets, or business inventory. Whether it's a temporary space for a move or a long-term storage solution, our 10x10 unit provides the flexibility you need for a hassle-free storage experience.",
            image: "",
            available: 0,
            price: 100
            }}/>
        <UnitsCard unit={{
            type: "10x20",
            description: "the ideal solution for those seeking versatile and secure storage for larger items, furniture sets, or even a vehicle. Whether you're undergoing a major life transition or simply need extra space for your belongings, our 10x20 unit provides the expansive storage you require for both short-term and long-term needs.",
            image: "",
            available: 0,
            price: 140
            }}/>
    </div>)
}

export default UnitSection