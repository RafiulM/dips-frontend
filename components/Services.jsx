import Link from "next/link";
import Image from "next/image";
import { servicesData } from "../data/Services";
import { useState } from "react";

function Services() {
  const [expand, setExpand] = useState(null);

  const toggle = (id) => {
    if (expand == id) {
      return setExpand(null);
    }

    setExpand(id);
  };

  return (
    <div className="flex justify-center px-[100px] bg-black pb-10">
      <div className="flex flex-col max-w-[1720px] w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-noto text-white text-[90px] leading-none">
            OUR <br />
            SERVICES
          </h1>
          <div className="flex gap-16">
            <p className="font-noto text-white text-3xl max-w-[580px]">
              We've worked with a wide array of clients across the globe to
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
        <div className="flex flex-col py-20">
          {servicesData.map((data, id) => (
            <div className="flex flex-col text-white py-20 border-t-[1px] gap-8 duration-300 ease-in-out">
              <div key={id} className="flex justify-between items-center">
                <span className="text-2xl">{data.title}</span>
                <div className="flex items-center gap-12">
                  <p className="max-w-[623px]">{data.content}</p>
                  <Link
                    href={data.to}
                    className="flex gap-2 bg-primary px-5 py-4"
                  >
                    <span className="text-black text-[15px]">LEARN MORE</span>
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.6 0V1.9H14.931L0 17.6605L1.269 19L16.2 3.2395V15.2H18V0H3.6Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
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
                <div className="flex">
                  <Image src={data.image1} width={722} height={393}/>
                </div>
                <div className="flex">
                  <Image src={data.image2} width={440} height={285}/>
                  <Image src={data.image3} width={440} height={285}/>
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
