import React from "react";
import { PrimaryButton } from "./Buttons";
import Image from "next/image";

function AboutUs() {
  return (
    <div id="About" className="flex flex-col">
      <div className="flex justify-center flex-col px-[100px] bg-white">
        <div className="flex flex-col justify-between max-w-[1720px] w-full gap-36">
          <h2 className="font-noto text-[90px] mb-4">ABOUT US</h2>
        </div>
      </div>
      <div className="bg-aboutus flex flex-col h-[625px] px-[100px] py-[55px]  bg-black w-full">
        <div className="flex justify-between h-full gap-12">
          <div className=" flex flex-col gap-8 max-w-[722px]">
            <p className="text-white text-xl leading-7">
              Hardianto is a name of person work in =digital agency based in
              Jakarta. Founder Novi Hardianto decided to go into business for
              himself, using his vast experience in software engineering and
              numerous ancillary fields to help people perfect their web
              presence and get seen.
              <br />
              <br />
              In setting up the company, he was able to rely on his vast
              experience from previous entrepreneurial activities and therefore
              knows what matters
            </p>
            <PrimaryButton href="#" text="SEE MORE" />
          </div>
          <div className="h-2">
            <div className="relative -translate-y-52">
              <Image
                src="/graphic/aboutus/aboutusvideo.png"
                width={860}
                height={544}
                alt="video profile"
              />
              <svg
                width="83"
                height="83"
                viewBox="0 0 83 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <circle cx="41.5" cy="41.5" r="41.5" fill="white" />
                <path
                  d="M52.0215 41.4999L36.2398 50.6114L36.2398 32.3883L52.0215 41.4999Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="font-noto text-[90px] leading-none text-white">OUR MAGIC TEAM</h2>
          <PrimaryButton href="#" text="SEE MORE"/>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
