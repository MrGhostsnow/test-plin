"use client";
import React, { useEffect, useState } from "react";
import WeatherDisplay from "../WeatherDisplay";
import WeatherForecast from "../WeatherForecast";
import WeatherInfos from "../WeatherInfos";

const API_KEY: string = "2915e8300d57a6f21a0ce2633e4f7011";

interface DailyForecast {
  day: string;
  icon: string;
  temp: {
    night: number;
    day: number;
  };
}

const WeatherApp: React.FC = () => {
  const [dailyForecast, setDailyForecast] = useState<DailyForecast[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showWeatherInfos, setShowWeatherInfos] = useState<boolean>(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((success) => {
      const { latitude, longitude } = success.coords;
      setLoading(true);

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data: any) => {
          const forecastData: DailyForecast[] = data.daily.map((day: any) => ({
            day: new Date(day.dt * 1000).toLocaleDateString("en-US", {
              weekday: "long",
            }),
            icon: day.weather[0].icon,
            temp: {
              night: day.temp.night,
              day: day.temp.day,
            },
          }));
          setDailyForecast(forecastData);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erro ao obter dados da API:", error);
        });
    });
  }, []);

  const handleMouseEnter = () => {
    setShowWeatherInfos(true);
  };

  const handleMouseLeave = () => {
    setShowWeatherInfos(false);
  };

  return (
    <div>
      {loading && <h1 className="text-black">Carregando...</h1>}
      <div className="flex justify-center mb-6">
        <WeatherDisplay />
      </div>

      <WeatherForecast
        dailyForecast={dailyForecast}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {showWeatherInfos && <WeatherInfos />}
    </div>
  );
};

export default WeatherApp;
