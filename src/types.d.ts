type Coordinates = {
  latitude: number
  longitude: number
}

type GeocodingResult = {
  name: string
  country: string
  lat: number
  lon: number
  state: string
  local_names: Record<string, string>
}

// TODO: refactor weather data types to be more DRY
type CurrentWeather = {
  id: number
  main: string
  description: string
  icon: string
}

type DailyData = {
  dt: number
  sunrise: number
  sunset: number
  moonrise: number
  moonset: number
  moon_phase: number
  temp: {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
  }
  feels_like: {
    day: number
    night: number
    eve: number
    morn: number
  }
  pressure: number
  humidity: number
  dew_point: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: CurrentWeather[]
  clouds: number
  pop: number
  uvi: number
}

type HourlyData = {
  dt: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: CurrentWeather[]
  pop: number
}
