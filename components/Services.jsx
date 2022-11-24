import Link from "next/link";
import Image from "next/image";
import { servicesData } from "../data/Services";
import { useState } from "react";
import { PrimaryButton } from "./Buttons";

function Services() {
  const [expand, setExpand] = useState(null);

  const toggle = (id) => {
    if (expand == id) {
      return setExpand(null);
    }

    setExpand(id);
  };

  return (
    <div className="flex justify-center px-[100px] bg-black bg-services bg-bottom bg-no-repeat">
      <div className="flex flex-col max-w-[1720px] w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-noto text-white text-[90px] leading-none">
            OUR <br />
            SERVICES
          </h1>
          <div className="flex gap-16">
            <p className="font-noto text-white text-3xl max-w-[580px]">
              We&apos;ve worked with a wide array of clients across the globe to
              apply design fundamentals of elegance, simplicity
            </p>
            <Link href="#services" className="group flex mb-auto gap-8">
              <span className="font-noto text-white text-lg mt-auto group-hover:text-primary">
                VIEW ALL
              </span>
              <svg
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white group-hover:fill-primary"
              >
                <path d="M15 0V7.5H62.2125L0 69.7125L5.2875 75L67.5 12.7875V60H75V0H15Z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-col pt-20">
          {servicesData.map((data, id) => (
            <div
              key={id}
              className="grid grid-cols-12 text-white py-7 border-t-[1px] gap-20 duration-300 ease-in-out"
            >
              <div className="item1 col-span-5 flex flex-col justify-between">
                <span className="text-2xl py-4">{data.title}</span>
                <div
                  className={
                    expand == id
                      ? "flex justify-between overflow-hidden h-auto max-h-96 duration-300 ease-in-out text-7xl"
                      : "flex justify-between overflow-hidden h-auto max-h-0 duration-300 ease-in-out text-7xl"
                  }
                >
                  <div className="flex">
                    <Image
                      src={data.image1}
                      width={722}
                      height={393}
                      alt="services"
                    />
                  </div>
                </div>
              </div>
              <div className="item2 col-span-7 flex flex-col justify-between">
                <div className="flex justify-between items-center gap-8">
                  <p className="max-w-[623px]">{data.content}</p>
                  <div className="flex gap-4">
                    <PrimaryButton href={data.to} text="LEARN MORE" />
                    <div className="flex w-11 items-center justify-center duration-300 ease-in-out">
                      <span
                        className="text-6xl font-thin cursor-pointer"
                        onClick={() => toggle(id)}
                      >
                        {expand == id ? "-" : "+"}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    expand == id
                      ? "flex justify-between overflow-hidden h-auto max-h-96 duration-300 ease-in-out text-7xl"
                      : "flex justify-between overflow-hidden h-auto max-h-0 duration-300 ease-in-out text-7xl"
                  }
                >
                  <div className="flex w-full justify-between gap-8">
                    <Image
                      src={data.image2}
                      width={440}
                      height={285}
                      alt="services"
                    />
                    <Image
                      src={data.image3}
                      width={440}
                      height={285}
                      alt="services"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
