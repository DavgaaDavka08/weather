import { Baishin } from "@/icons/Baishin";
import { Locations } from "@/icons/Locations";
import { Search } from "@/icons/Search";
export const Leftcorner = ({
  selectedcity,
  maxGradus,
  Lefttext,
  times,
  renderWeatherIcon,
  searchHandler,
  searched,
  addHandler,
}) => {
  return (
    <div className=" justify-center items-center flex flex-col  ">
      <div className="flex flex-col w-[512px]  p-[16px] px-[24px] items-center gap-[16px] rounded-[48px] bg-white shadow-[0px_12px_24px_0px_rgba(0,0,0,0.06)">
        <div className="absolute left-[250px] top-[20px] z-50 ">
          <Search />
          <input
            type="text"
            className="flex items-center flex-1 text-black font-manrope text-[32px] font-bold leading-none outline-none"
            onChange={searchHandler}
            placeholder="Search location..."
          />
          {searched.length > 0 && (
            <div className="flex w-[512px] py-[16px] flex-col items-start rounded-[24px] bg-white/80 backdrop-blur-[32px] gap-[20px] ">
              {searched.slice(0, 4).map((city, index) => (
                <div className="flex" key={index}>
                  <Locations />
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
        </div>
      </div>

      <div className="tanih w-[886.5px] flex flex-col items-center justify-center ">
        <div className="w-[414px] h-[828px] rounded-[48px] bg-gray-300 backdrop-blur-sm flex flex-col items-center justify-around ">
          <p>{times}</p>
          <div>
            <p className="text-5xl font-serif not-italic font-extrabold leading-normal">
              {selectedcity}
            </p>
          </div>
          <div>{renderWeatherIcon()}</div>
          <div className="w-[242px] h-[142px]">
            <p>{maxGradus}°C</p>
            <p className="text-6 text-blue-500 font-semibold">{Lefttext}</p>
          </div>
          <div className="flex w-[318px] justify-between items-end">
            <Baishin />

            {/* <Baishin />
            <Locationsmal />
            <Heart /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
