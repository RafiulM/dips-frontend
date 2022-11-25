import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div id="Home" className="flex bg-black items-center justify-center">
      <div className=" h-[95vh] mb-16">
        <div className="relative w-full h-5/6 object-cover overflow-hidden">
          <Image
            src="/graphic/heroslider1.png"
            width={3000}
            height={1080}
            className="object-cover"
            alt="cover"
          />
          <div className="absolute bottom-0 w-full mx-auto">
            <div className="flex w-full px-[100px] justify-center">
              <div className="flex justify-between max-w-[1720px] w-full">
                <h1 className=" font-noto text-black max-w-[80%] text-[80px] leading-none">
                  WE ASSIST YOU IN <br /> SOLVING TOMORROW&apos;S
                </h1>
                <Link href="#services" className="group flex mb-10 gap-8">
                  <span className="font-noto text-lg mt-auto group-hover:text-primary">
                    ABOUT US
                  </span>
                  <svg
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-black mt-auto group-hover:fill-primary"
                  >
                    <path d="M15 0V7.5H62.2125L0 69.7125L5.2875 75L67.5 12.7875V60H75V0H15Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full  px-[100px] justify-center">
          <h1 className="flex font-noto w-full max-w-[1720px] text-white  text-[80px]  leading-none">
            PROBLEMS TODAY
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
