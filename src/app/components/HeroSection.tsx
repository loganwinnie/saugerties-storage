import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";

function HeroSection() {
  return (
    <div className="w-full mt-20 md:flex text-green text-center ">
      <div className="my-8 md:px-4 flex flex-col items-center justify-center gap-4">
        <h1 className="heading1">Saugerties Self Storage</h1>
        <h2 className="heading2">Affordable Storage that you can count on.</h2>
        <h2 className="heading2">Guaranteed rate for first year of your rental</h2>
        <h3 className="call">Ready to rent?</h3>
        <Link className="btn-main" href={"/rent"}>Rent Now</Link>
        <div>
          <Link className="btn-secondary mx-2" href={"/portal/login"}>Login</Link>
          <Link className="btn-secondary mx-2" href={"/portal/signup"}>Signup</Link>
        </div>
      </div>
      <div className="w-full h-96 aspect-auto md:border-2 border-t-2 border-white-300">
        <ImageCarousel/>
      </div>
    </div>
  );
}

export default HeroSection;
