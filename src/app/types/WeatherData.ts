export interface WeatherDay {
    day: string;
    icon: string;
    temp: {
      night: number;
      day: number;
    };
  }