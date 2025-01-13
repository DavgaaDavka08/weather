import { FakeMoon } from "@/icons/FakeMonn";
import { FontLoc } from "@/icons/FontLoc";

export const Rigthcorner = ({
  selectedcity,
  maxGradus,
  rightText,
  times,
  renderWeatherIcons,
}) => {
  return (
    <div className="flex  items-center justify-center bg-[#0F141E] text-white  ">
      <div className="w-[886.5px] h-[1138px] flex flex-col items-center justify-center  ">
        <div className=" w-[128px] h-[128px] relative  top-[870px] left-[180px] ">
          <div>
            <FakeMoon />
          </div>
        </div>
        <div className="w-[414px] h-[828px] rounded-[48px] bg-[rgba(17,24,39,0.75)] backdrop-blur-md flex flex-col items-center justify-around ">
          <p>{times}</p>
          <div className="relative">
            <div className="absolute rigth-[600px] left-[300px]">
              <FontLoc />
            </div>
            <p className="text-5xl font-serif not-italic font-extrabold leading-normal">
              {selectedcity}
            </p>
          </div>
          <div>{renderWeatherIcons()}</div>
          <p className=" bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600 inline-block text-transparent bg-clip-text text-4xl font-bold w-[369px] h-[197px] font-manrope text-[144px] leading-none">
            {maxGradus}
          </p>
          <p className="text-6 text-blue-500  font-manrope text-2xl font-extrabold leading-none ">
            {rightText}
          </p>
        </div>
      </div>
    </div>
  );
};
