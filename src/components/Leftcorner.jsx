export const Leftcorner = ({ selectedcity, maxGradus, text }) => {
  const renderWeatherIcon = () => {
    let res = text.toLowerCase();
    switch (true) {
      case res.includes("moon"):
        return <img src="Moon.png" alt="" />;
      case res.includes("moonrain"):
        return <img src="MoonRain.png" alt="" />;
      case res.includes("mooncloud"):
        return <img src="MonnClouds" alt="" />;
      case res.includes("moonSnow"):
        return <img src="MoonSnow.png" alt="" />;
      case res.includes("wind"):
        return <img src="MoonWind.png" alt="" />;
      case res.includes("overcast"):
        return <img src="MoonSnow.png" alt="" />;
      case res.includes("thunder"):
        return <img src="MoonTunder.png" alt="" />;
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-[#0F141E] text-white ">
      {renderWeatherIcon()}
      <div className="w-[886.5px] h-[1138px] flex flex-col items-center justify-center">
        <div className="w-[414px] h-[828px] rounded-[48px] bg-gray-300 backdrop-blur-sm flex flex-col items-center justify-around">
          <p>January 9, 2025</p>
          <div>
            <p className="text-5xl font-serif not-italic font-extrabold leading-normal">
              {selectedcity}
            </p>
          </div>
          <div>
            <img
              className="w-[262.108px] h-[262.108px]"
              src="https://pinecone-academy-weather-app.vercel.app/_next/image?url=%2Fmoon.png&w=640&q=75"
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
