import React, { useEffect, useState } from "react";

interface WeatherData {
  timezone: string;
}

const WeatherDisplay: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const API_KEY = "2915e8300d57a6f21a0ce2633e4f7011";

  useEffect(() => {
    const getWeatherData = () => {
      navigator.geolocation.getCurrentPosition((success) => {
        const { latitude, longitude } = success.coords;

        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((data: WeatherData) => {
            setWeatherData(data);
            console.log(weatherData);
          })
          .catch((error) => {
            console.error("Erro ao obter dados do clima:", error);
          });
      });
    };

    getWeatherData();
  }, []);

  return (
    <div>
      <div className="text-black font-bold">
        {weatherData?.timezone ?? "Loading..."}
      </div>
    </div>
  );
};

export default WeatherDisplay;
