"use client";
import { Leftcorner } from "@/components/Leftcorner";
import { Middlebackground } from "@/components/Middlebackground";
import { Rigthcorner } from "@/components/Rigthcorner";
import { Search } from "@/icons/Search";
import { useState, useEffect } from "react";
export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [selectedCity, setSelectedCity] = useState("ulaanbaatar");
  const [minGradus, setMinGradus] = useState("");
  const [maxGradus, setMaxGradus] = useState("");
  const [rightText, setRightText] = useState("");
  const [Lefttext, setLeftText] = useState("");
  const [times, setTimes] = useState("");
  const [changeImg, setchangeImg] = useState("");
  const renderWeatherIcon = () => {
    let res = Lefttext.toLowerCase();
    switch (true) {
      case res.includes("sun"):
        return <img src="sun.png" alt="a" />;
      case res.includes("rain"):
        return <img src="Rain.png" alt="a" />;
      case res.includes("cloud"):
        return <img src="Clouds.png" alt="a" />;
      case res.includes("mist"):
        return <img src="Clouds.png" alt="a" />;
      case res.includes("snow"):
        return <img src="Snow.png" alt="a" />;
      case res.includes("freez"):
        return <img src="Snow.png" alt="a" />;
      case res.includes("wind"):
        return <img src="Wind.png" alt="a" />;
      case res.includes("overcast"):
        return <img src="Wind.png" alt="a" />;
      case res.includes("thunder"):
        return <img src="Tunder.png" alt="a" />;
    }
  };
  console.log(renderWeatherIcon);
  const renderWeatherIcons = () => {
    let res = rightText.toLowerCase();
    switch (true) {
      case res.includes("clear"):
        return <img src="Moon.png" alt="a" />;
      case res.includes("rain"):
        return <img src="MoonRain.png" alt="a" />;
      case res.includes("cloud"):
        return <img src="MoonClouds.png" alt="a" />;
      case res.includes("mist"):
        return <img src="MoonClouds.png" alt="a" />;
      case res.includes("snow"):
        return <img src="MooonSnow.png" alt="a" />;
      case res.includes("freez"):
        return <img src="MooonSnow.png" alt="a" />;
      case res.includes("wind"):
        return <img src="MoonWind.png" alt="a" />;
      case res.includes("overcast"):
        return <img src="MoonWind.png" alt="a" />;
      case res.includes("thunder"):
        return <img src="MoonTunder.png" alt="a" />;
    }
    //// sain medehgvv bgaa heseg
  };

  // const [sun, setSun] = useState("sun");
  // const [moon, setMoon] = useState("");
  // const setPhoto = () => {
  //   if (sun === "sun") {
  //     setSun === "Rain";
  //   }
  //   if (sun === "sun") {
  //     setSun === "Wind";
  //   }
  //   if (sun === "sun") {
  //     setSun === "Tunder";
  //   }
  //   if (sun === "sun") {
  //     setSun === "Clouds";
  //   }
  //   if (sun === "sun") {
  //     setSun === "Snow";
  //   }
  // };

  useEffect(() => {
    async function getData() {
      const result = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const data = await result.json();
      let incomeCities = data.data.map((country) => country.cities).flat();
      setCities(incomeCities);
    }
    getData();
  }, []);

  useEffect(() => {
    getWeather(selectedCity);
  }, []);

  const searchHandler = (e) => {
    const search = e.target.value.toLowerCase();
    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(search)
    );
    setSearched(filtered);
  };

  async function getWeather(city) {
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=263d2a48c3c342af89a21154250801&q=${city}`
    );
    const data = await result.json();
    let incomeMaxCelsius = data.forecast.forecastday[0].day.maxtemp_c;
    let incomeMinCelsius = data.forecast.forecastday[0].day.mintemp_c;
    let incomeLeftText = data.forecast.forecastday[0].day.condition.text;
    let incomeRightText = data.forecast.forecastday[0].hour[0].condition.text;
    console.log(incomeRightText);
    let incomeTime = data.forecast.forecastday[0].date;
    setMaxGradus(incomeMaxCelsius);
    setMinGradus(incomeMinCelsius);
    setLeftText(incomeLeftText);
    setRightText(incomeRightText);
    setTimes(incomeTime);
  } ////sain medehgvv baigaa heseg

  const addHandler = (city) => {
    setSelectedCity(city);
    getWeather(city);
    setSearched([]);
  };
  return (
    <div className="grid grid-cols-2 h-screen relative overflow-hidden">
      <Leftcorner
        addHandler={addHandler}
        searched={searched}
        searchHandler={searchHandler}
        selectedcity={selectedCity}
        Lefttext={Lefttext}
        times={times}
        maxGradus={maxGradus}
        renderWeatherIcon={renderWeatherIcon}
      />
      <Rigthcorner
        addHandler={addHandler}
        searched={searched}
        searchHandler={searchHandler}
        selectedcity={selectedCity}
        maxGradus={minGradus}
        rightText={rightText}
        times={times}
        renderWeatherIcons={renderWeatherIcons}
      />
      <Middlebackground />
    </div>
  );
}
