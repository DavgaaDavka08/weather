import { Search } from "@/icons/Search";
import { useState } from "react";
export const Rigthcorner = ({
  selectedcity,
  maxGradus,
  text,
  searchHandler,
  searched,
  addHandler,
}) => {
  const renderWeatherIcon = () => {
    let res = text.toLowerCase();
    switch (true) {
      case res.includes("sun"):
        return <img src="sun.gnp" alt="" />;
      case res.includes("rain"):
        return <img src="Rain.png" alt="" />;
      case res.includes("cloud"):
        return <img src="Clouds.png" alt="" />;
      case res.includes("snow"):
        return <img src="Snow.png" alt="" />;
      case res.includes("wind"):
        return <img src="Wind.png" alt="" />;
      case res.includes("overcast"):
        return <img src="Snow.png" alt="" />;
      case res.includes("thunder"):
        return <img src="Tunder.png" alt="" />;
    }
  };
  return (
    <div>
      {renderWeatherIcon()}
      <div className="flex w-[512px] min-w-[320px] p-[16px] px-[24px] items-center gap-[16px] rounded-[48px] bg-white shadow-[0px_12px_24px_0px_rgba(0,0,0,0.06)] relative">
        {/* <Search /> */}
        <input
          type="text"
          className="flex items-center flex-1 text-black font-manrope text-[32px] font-bold leading-none outline-none"
          onChange={searchHandler}
          placeholder="Search location..."
        />
      </div>
      {searched.length > 0 && (
        <div className="flex w-[512px] py-[16px] flex-col items-start rounded-[24px] bg-white/80 backdrop-blur-[32px] gap-[20px] ">
          {searched.slice(0, 4).map((city, index) => (
            <div className="flex" key={index}>
              {/* <Locationsmal /> */}
              <button
                className="flex-1 text-black overflow-hidden text-ellipsis font-manrope text-[28px] font-bold line-clamp-1 "
                onClick={() => addHandler(city)}
              >
                {city}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Weather Info */}
      <div className="w-[886.5px] h-[1138px] flex flex-col items-center justify-center">
        <div className="w-[414px] h-[828px] rounded-[48px] bg-gray-300 backdrop-blur-sm flex flex-col items-center justify-around">
          <p>January 9, 2025</p>
          <div>
            <p className="text-5xl font-serif not-italic font-extrabold leading-normal">
              {selectedcity}
            </p>
          </div>
          <div></div>
          <div>
            <img
              className="w-[262.108px] h-[262.108px]"
              src="https://pinecone-academy-weather-app.vercel.app/_next/image?url=%2Fsun.png&w=640&q=75"
              alt="weather icon"
            />
          </div>
          <div className="w-[242px] h-[142px]">
            <p>{maxGradus}°C</p>
            <p className="text-6 text-blue-500 font-semibold">{text}</p>
          </div>
          <div className="flex w-[318px] justify-between items-end">
            {/* <Baishin />
            <Locationsmal />
            <Heart /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
