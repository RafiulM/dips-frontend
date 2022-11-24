import React from "react";
import { valueData } from "../data/Value";

function Value() {
  return (
    <div id="Value" className="flex justify-center p-[100px] bg-black">
      <div className="flex flex-col max-w-[1720px] w-full gap-36">
        <div className="flex justify-between items-center">
          <h2 className="font-noto text-[90px] text-white mb-4">OUR VALUES</h2>
        </div>
        <div className="grid grid-cols-3 gap-48 text-[#E5E5E5] text-[32px]">
          {valueData.map((data, id) => (
            <div key={id} className="flex flex-col">
              <span>{data.heading}</span>
              <div className="flex justify-center items-center border border-[#E5E5E5] h-[222px] my-9">
                {data.graphic}
              </div>
              {data.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Value;
