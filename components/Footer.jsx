import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex justify-center py-[80px] px-[100px] bg-primary">
      <div className="flex flex-col max-w-[1720px] w-full">
        <div className="flex justify-between">
          <div className="flex">
            <Image
              src="/dipsrotate.svg"
              height={282}
              width={144}
              alt="dips-logo"
            />
          </div>
          <div className=" flex items-center -rotate-90">
            <span className="text-[26px]">P. +62 21 858 3944</span>
          </div>
          <div>
            <span className="text-xl font-semibold">Quick Links</span>
            <ul className="mt-4 leading-9 text-[15px]">
              <li>
                <Link href="#">SERVICES</Link>
              </li>
              <li>
                <Link href="#">WORKFLOW</Link>
              </li>
              <li>
                <Link href="#">PORTFOLIO</Link>
              </li>
              <li>
                <Link href="#">ABOUT US</Link>
              </li>
              <li>
                <Link href="#">OUR VALUE</Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="text-xl font-semibold">Follow</span>
            <ul className="mt-4 leading-9 text-xl">
              <li>
                <Link href="#">facebook</Link>
              </li>
              <li>
                <Link href="#">twitter</Link>
              </li>
              <li>
                <Link href="#">instagram</Link>
              </li>
              <li>
                <Link href="#">linkedin</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-start gap-8">
            <div className="flex flex-col justify-between h-full max-w-[400px]">
              <span className="text-xl font-semibold">
                Sign up to our newsletter
              </span>
              <input
                placeholder="EMAIL"
                className="placeholder:text-black/50 placeholder:text-[15px] bg-transparent border-b-[1px] border-black py-4"
              ></input>
              <p>
                This site is protected by reCAPTHCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
            </div>
            <div className="flex h-full items-center justify-center">
              <svg
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0V7.5H62.2125L0 69.7125L5.2875 75L67.5 12.7875V60H75V0H15Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t-[1px] border-black ml-40 py-9 mt-11">
          <span>
            Copyright 2022 Digital Presence Strategy - Dipstrategy - Digital
            Agency Jakarta
          </span>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
