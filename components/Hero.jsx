import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex bg-black items-center justify-center">
      <div className="relative h-[95vh] mb-16">
        <div className="absolute bottom-9 max-w-[1720px]">
          <h1 className=" font-noto text-black max-w-[80%] text-[80px] mx-[100px]  leading-none">
            WE ASSIST YOU IN SOLVING TOMORROW'S <br />
            <span className="text-white"> PROBLEM TODAY </span>
          </h1>
        </div>
        <div className=" w-full h-5/6 object-cover overflow-hidden">
          <Image
            src="/graphic/heroslider1.png"
            width={3000}
            height={1080}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
