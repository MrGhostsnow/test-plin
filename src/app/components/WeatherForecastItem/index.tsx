import Image from "next/image";
import React from "react";
import translateDay from "../../../utils/TranslateDays";
import { WeatherDay } from "../../types/WeatherData";

interface WeatherForecastItemProps {
  day: WeatherDay;
}

const WeatherForecastItem: React.FC<WeatherForecastItemProps> = ({ day }) => {
  const translatedDay: string = translateDay(day.day);

  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex items-center justify-center p-4">
        <img
          src={`http://openweathermap.org/img/wn/${day.icon}.png`}
          alt="weather icon"
          className="w-12 h-12"
        />
      </div>
      <div className="text-center px-4 py-2">
        <div className="text-lg font-semibold text-gray-800">
          {translatedDay}
        </div>
        <div className="text-gray-500">
          Noite - {day.temp.night.toFixed()}&#176; C / Dia -{" "}
          {day.temp.day.toFixed()}&#176; C
        </div>
      </div>
    </div>
  );
};

export default WeatherForecastItem;
