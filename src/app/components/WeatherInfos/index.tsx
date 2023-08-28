import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTint,
  faCompass,
  faWind,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

const WeatherInfos: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const API_KEY = "2915e8300d57a6f21a0ce2633e4f7011";

    const getWeatherData = async () => {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          }
        );

        const { latitude, longitude } = position.coords;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
        );

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeatherData();
  }, []);

  const renderWeatherData = () => {
    if (weatherData) {
      const { humidity, pressure, sunrise, sunset, wind_speed } =
        weatherData.current;

      const formatTime = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
      };

      return (
        <div className="card p-4 rounded shadow-md bg-white mt-4 shadow-md rounded-lg">
          <div className="mb-4">
            <div className="text-xl font-semibold mb-1 text-black">
              Informações meteorológicas
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="weather-item">
              <div className="font-semibold flex items-center text-black">
                <FontAwesomeIcon icon={faTint} className="mr-2 text-blue-400" />
                Humidade
              </div>
              <div className=" text-gray-800 text-lg font-semibold">
                {humidity}%
              </div>
            </div>
            <div className="weather-item">
              <div className="font-semibold flex items-center text-black">
                <FontAwesomeIcon icon={faCompass} className="mr-2" />
                Pressão
              </div>
              <div className=" text-gray-800 text-lg font-semibold">
                {pressure}
              </div>
            </div>
            <div className="weather-item">
              <div className="font-semibold flex items-center text-black">
                <FontAwesomeIcon icon={faWind} className="mr-2" />
                Velocidade do vento
              </div>
              <div className=" text-gray-800 text-lg font-semibold">
                {wind_speed}
              </div>
            </div>
            <div className="weather-item">
              <div className="font-semibold flex items-center text-black">
                <FontAwesomeIcon
                  icon={faSun}
                  className="mr-2 text-orange-500"
                />
                Nascer do sol
              </div>
              <div className=" text-gray-800 text-lg font-semibold">
                {formatTime(sunrise)}
              </div>
            </div>
            <div className="weather-item">
              <div className="font-semibold flex items-center text-black">
                <FontAwesomeIcon icon={faMoon} className="mr-2 text-gray-500" />
                Pôr do sol
              </div>
              <div className=" text-gray-800 text-lg font-semibold">
                {formatTime(sunset)}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return <div>{renderWeatherData()}</div>;
};

export default WeatherInfos;
