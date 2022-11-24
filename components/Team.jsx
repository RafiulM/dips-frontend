import React from "react";

function Team() {
  return (
    <div className="flex justify-center p-[100px] bg-white">
      <div className="flex flex-col max-w-[1720px] w-full gap-36">
        <div className=" flex flex-col gap-8 max-w-[1116px]">
          <p className="text-white text-xl leading-7">
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
          <PrimaryButton href="#" text="SEE MORE" />
        </div>
      </div>
    </div>
  );
}

export default Team;
