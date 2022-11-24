import React from "react";
import Image from "next/image";
import { portfolioData } from "../data/Portfolio";
import { PrimaryButton } from "./Buttons";

function Portfolio() {
  return (
    <div className="flex justify-center p-[100px] bg-white">
      <div className="flex flex-col max-w-[1720px] w-full gap-36">
        <div className="flex justify-between items-center">
          <h2 className="font-noto text-[90px] mb-4">PORTFOLIO</h2>
          <div className="flex items-center gap-14">
            <p className="text-lg max-w-[662px]">
              Take a look at our most successful projects and see for yourself
              our skills and the results that speak for themselves.
            </p>
            <div className="flex gap-12">
              <button type="button">
                <svg
                  width="50"
                  height="16"
                  viewBox="0 0 50 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-black hover:fill-primary"
                >
                  <path d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95263 8.46159 1.31946 8.07107 0.928936C7.68054 0.538412 7.04738 0.538412 6.65685 0.928936L0.292892 7.2929ZM50 7L1 7L1 9L50 9L50 7Z" />
                </svg>
              </button>
              <button type="button">
                <svg
                  width="50"
                  height="16"
                  viewBox="0 0 50 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-black hover:fill-primary"
                >
                  <path d="M49.7071 8.70711C50.0976 8.31659 50.0976 7.68342 49.7071 7.2929L43.3431 0.928936C42.9526 0.538412 42.3195 0.538412 41.9289 0.928936C41.5384 1.31946 41.5384 1.95263 41.9289 2.34315L47.5858 8L41.9289 13.6569C41.5384 14.0474 41.5384 14.6805 41.9289 15.0711C42.3195 15.4616 42.9526 15.4616 43.3431 15.0711L49.7071 8.70711ZM-8.74228e-08 9L49 9L49 7L8.74228e-08 7L-8.74228e-08 9Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {portfolioData.map((data, id) => (
            <div
              key={id}
              className={
                id % 2
                  ? "flex flex-row-reverse gap-12 justify-between items-center py-36"
                  : "flex gap-12 justify-between items-center py-36"
              }
            >
              <div className="flex flex-col">
                <span className="font-noto text-[#B6B6B6] text-[26px]">
                  {data.category}
                </span>
                <h3 className="font-noto text-[58px] leading-none">{data.project}</h3>
                <ol className="list-decimal list-inside mt-8">
                  {data.highlights.map((highlight, id) => (
                    <li key={id} className="text-[21px] leading-10">
                      {highlight}
                    </li>
                  ))}
                </ol>
                <div className="mt-10">
                  <PrimaryButton href={data.link} text="CASE STUDY" />
                </div>
              </div>
              <div className="flex flex-col">
                <Image src={data.image} width={1000} height={1000} alt="portfolio"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
