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
  const [text, setText] = useState("");
  const [changeImg, setchangeImg] = useState("");
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
    let incomeLeftText = data.current.condition.text;
    setMaxGradus(incomeMaxCelsius);
    setMinGradus(incomeMinCelsius);
    setText(incomeLeftText);
  }

  const addHandler = (city) => {
    setSelectedCity(city);
    getWeather(city);
    setSearched([]);
  };
  return (
    <div className="grid grid-cols-2 h-screen relative overflow-hidden">
      <Rigthcorner
        addHandler={addHandler}
        searched={searched}
        searchHandler={searchHandler}
        selectedcity={selectedCity}
        maxGradus={maxGradus}
        text={text}
      />
      <Leftcorner
        addHandler={addHandler}
        searched={searched}
        searchHandler={searchHandler}
        selectedcity={selectedCity}
        maxGradus={minGradus}
        text={text}
      />
      <Middlebackground />
    </div>
  );
}
