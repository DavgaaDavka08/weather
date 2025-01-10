export const Rigthcorner = ({
  selectedcity,
  maxGradus,
  rightText,
  times,
  renderWeatherIcons,
}) => {
  return (
    <div className="flex  items-center justify-center bg-[#0F141E] text-white ">
      <div className="w-[886.5px] h-[1138px] flex flex-col items-center justify-center ">
        <div className="w-[414px] h-[828px] rounded-[48px] bg-gray-300 backdrop-blur-sm flex flex-col items-center justify-around ">
          <p>{times}</p>
          <div>
            <p className="text-5xl font-serif not-italic font-extrabold leading-normal">
              {selectedcity}
            </p>
          </div>
          <div>{renderWeatherIcons()}</div>
          <div className="w-[242px] h-[142px]">
            <p>{maxGradus}°C</p>
            <p className="text-6 text-blue-500 font-semibold">{rightText}</p>
          </div>
          <div className="flex w-[318px] justify-between items-end"></div>
        </div>
      </div>
    </div>
  );
};
