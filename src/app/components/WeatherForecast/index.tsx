import React from "react";
import WeatherForecastItem from "../WeatherForecastItem";

import { WeatherDay } from "../../types/WeatherData";

interface WeatherForecastProps {
  dailyForecast: WeatherDay[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({
  dailyForecast,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {dailyForecast.map((day, idx) => (
        <WeatherForecastItem key={idx} day={day} />
      ))}
    </div>
  );
};

export default WeatherForecast;
