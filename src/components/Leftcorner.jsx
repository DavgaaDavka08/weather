// import Home from "@/app/page";
// import { Loc } from "@/icons/Loc";
// import { Love } from "@/icons/Love";
// import { Men } from "@/icons/Men";
import { FakeSun } from "@/icons/FakeSun";
import { FontLoc } from "@/icons/FontLoc";
import { Locations } from "@/icons/Locations";

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
    <div className=" justify-center items-center flex flex-col bg-[#F3F4F6] ">
      <div className="absolute left-[320px] top-[40px] z-50">
        <input
          type="text"
          className="relative  gap-[10px] flex items-center w-full font-manrope p-4 pl-12 pr-4 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 transition-all duration-300 text-black font-manrope text-[32px] font-bold leading-normal"
          onChange={searchHandler}
          placeholder="Search..."
          style={{
            backgroundImage: `url('/path-to-search-icon.svg')`, // Optional: if you want to add a custom search icon inside the input
            backgroundRepeat: "no-repeat",
            backgroundPosition: "10px center", // Adjust to position icon inside input
          }}
        />

        {searched.length > 0 && (
          <div className="flex w-[512px] py-[16px] flex-col items-start rounded-[24px] bg-white/80 backdrop-blur-[32px] gap-[20px] relative top-[10px] left-[5px]">
            {searched.slice(0, 3).map((city, index) => (
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

      <div className="tanih w-[886.5px] flex flex-col items-center justify-center  absolute">
        <div className="relative top-[80px] right-[180px]">
          <FakeSun />
        </div>

        <div className="w-[414px] h-[828px] rounded-[48px] bg-[rgba(255,255,255,0.75)] backdrop-blur-md flex flex-col items-center justify-around  relative bottom-[28px]">
          <p>{times}</p>
          <div className="relative">
            <div className="absolute rigth-[600px] left-[300px]">
              <FontLoc />
            </div>
            <p className="text-5xl font-serif not-italic font-extrabold leading-normal ">
              {selectedcity}
            </p>
          </div>
          <div>{renderWeatherIcon()}</div>
          <div>
            <p className="bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600 inline-block text-transparent bg-clip-text text-4xl font-bold w-[350px] h-[197px] font-manrope text-[144px] leading-none">
              {maxGradus}
            </p>
          </div>

          <p className="text-[#FF8E27] font-manrope text-2xl font-extrabold leading-none">
            {Lefttext}
          </p>
          <div className="flex w-[318px] justify-between items-end">
            {/* <Home />
            <Loc />
            <Love />
            <Men /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
