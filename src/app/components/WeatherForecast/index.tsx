import React from "react";
import WeatherForecastItem from "../WeatherForecastItem";

interface WeatherData {
  day: string;
  icon: string;
  temp: {
    night: number;
    day: number;
  };
}

interface WeatherForecastProps {
  dailyForecast: WeatherData[];
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ dailyForecast }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {dailyForecast.map((day, idx) => (
        <WeatherForecastItem key={idx} day={day} />
      ))}
    </div>
  );
};

export default WeatherForecast;
