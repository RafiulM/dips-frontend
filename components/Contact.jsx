import Link from "next/link";
import React from "react";
import { PrimaryButton } from "./Buttons";

function Contact() {
  return (
    <div className="flex justify-center py-[50px] px-[100px] bg-white">
      <div className="flex max-w-[1720px] w-full gap-[105px]">
        <div className="flex flex-col justify-between w-1/2">
          <div>
            <h2 className="font-noto text-[90px] leading-none mb-4 whitespace-nowrap">
              GET IN TOUCH
            </h2>
            <p className="text-2xl mt-8 ">
              Looking to talk to us directly, or planning an office visit? As
              Digital Agency, Dipstrategy start by understanding your business
              need to comes up with any solutions. That's why it is important
              for us to hear your story. When it come to listening to your
              story, we are all ears.
            </p>
          </div>
          <div className="flex flex-col">
            <p>
              Gd. Titan lt.3, Jl. Slamet Riyadi no.7, Jakarta 13150 - Indonesia
            </p>
            <p className="text-[40px]">
              P. +62 21 858 3944 <br />
              INFO@DIPSTRATEGY.CO.ID
            </p>
          </div>
          <ul className="flex gap-6">
            <li>
              <a href="https://www.facebook.com">FACEBOOK</a>
            </li>
            <li>
              <a href="https://www.twitter.com">TWITTER</a>
            </li>
            <li>
              <a href="https://www.instagram.com">INSTAGRAM</a>
            </li>
            <li>
              <a href="https://www.linkedin.com">LINKEDIN</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-1/2 gap-14 bg-black py-[75px] px-[60px]">
          <input
            placeholder="NAME"
            className="placeholder:text-white/50 placeholder:text-[15px] bg-transparent border-b-[1px] border-white py-4 text-white"
          ></input>
          <input
            placeholder="EMAIL"
            className="placeholder:text-white/50 placeholder:text-[15px] bg-transparent border-b-[1px] border-white py-4 text-white"
          ></input>
          <textarea
            placeholder="MESSAGE*"
            name="message"
            className="placeholder:text-white/50 placeholder:text-[15px] bg-transparent border-b-[1px] border-white py-4 text-white resize-none h-32"
          ></textarea>
          <PrimaryButton href="#" text="SUBMIT" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
