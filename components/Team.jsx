import React from "react";
import { team } from "../data/Team";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

function Team() {
  return (
    <div className="flex justify-center py-10 px-[100px] bg-white">
      <div className="flex flex-col max-w-[1720px] w-full">
        <div className=" flex flex-col gap-8 max-w-[1116px]">
          <p className="text-xl leading-7">
            Hardianto is a name of person work in =digital agency based in
            Jakarta. Founder Novi Hardianto decided to go into business for
            himself, using his vast experience in software engineering and
            numerous ancillary fields to help people perfect their web presence
            and get seen.
            <br />
            <br />
            In setting up the company, he was able to rely on his vast
            experience from previous entrepreneurial activities and therefore
            knows what matters
          </p>
        </div>
        <div className="grid grid-cols-4 gap-16 h-auto py-10">
          {team.map((data, id) => (
            <div key={id} className="flex flex-col">
              <div>
                <Image src={data.photo} width={500} height={330} />
              </div>
              <div className="flex flex-col gap-3 px-8 py-7 bg-primary">
                <div className="flex flex-col">
                  <span className="font-extrabold text-[26px]">{data.name}</span>
                  <span>{data.jobtitle}</span>
                </div>
                <div className="flex gap-5">
                  <FaLinkedinIn size={20} />
                  <FaFacebookF size={18} />
                  <FaTwitter size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
