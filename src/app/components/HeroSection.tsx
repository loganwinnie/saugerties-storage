import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";

function HeroSection() {
  return (
    <div className="w-full mt-20 lg:flex text-green text-left drop-shadow-2xl">
      <div className="my-8 md:px-4 px-4 flex flex-col items-center justify-center gap-4">
        <h2 className="heading1 md:whitespace-nowrap">Affordable and Convenient Storage is What We Do</h2>
        <h3 className="heading2 text-center">Guaranteed rate for first year of your rental</h3>
        <Link className="btn-main" href={"/rent"}>Rent Now</Link>
        <div>
          <Link className="btn-secondary mx-2" href={"/portal/login"}>Login</Link>
          <Link className="btn-secondary mx-2" href={"/portal/signup"}>Signup</Link>
        </div>
        <h3 className="heading2 mt-4">Or rent by phone</h3>
        <a className="heading2 btn-secondary font-extrabold" href="tel:8455944064">(845) 594-4064</a>
      </div>
      <div className="w-full h-96 aspect-auto md:border-2 border-t-2 border-white-300">
        <ImageCarousel/>
      </div>
    </div>
  );
}

export default HeroSection;
