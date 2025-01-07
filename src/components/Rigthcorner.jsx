"use client";

import { Location } from "@/icons/Location";
import { Search } from "@/icons/Search";
import { useState } from "react";
export const Rigthcorner = () => {
  const [cities, setCities] = useState("");
  return (
    <div className="flex flex-col   bg-[#F3F4F6] text-gray-800 ">
      <div className="absolute p-4 flex w-[567px] min-w-[320]   items-center gap-[16px] rounded-[48px] bg-[#fff] bg-cyan-500]">
        <Search />
        <div className="flex flex-col">
          <input
            type="text"
            className="flex items-center flex-[1 0 0 ] text-black font-sans italic font-thin-[700]"
            onChange={(e) => setCities(e.target.value)}
          />
          <div className=" w-[512px] flex p-4  flex-col items-start absolute bottom-[-210px] rounded-[24px] bg-white bg-opacity-80 backdrop-blur-[32px] border-black ">
            <div className="flex h-[56px] p-6 items-center gap-4 place-items-stretch">
              <Location />
              <p>{cities}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[884px] h-[100%] flex flex-col items-center justify-center  ">
        <div className="w-[414px] h-[828px] shrink-0 rounded-[48px] bg-black backdrop-blur-[12px]"></div>
      </div>
    </div>
  );
};
