declare module '*.png'

type SearchLocation = {
  name: string
  country: string
  lat: number
  lon: number
  state: string
  local_names: Record<string, string>
}

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

type UnixTimeStamp = number

type Minutely = {
  dt: UnixTimeStamp
  precipitation: number
}

type Hourly = {
  dt: UnixTimeStamp
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

type Daily = {
  dt: UnixTimeStamp
  sunrise: UnixTimeStamp
  sunset: UnixTimeStamp
  moonrise: UnixTimeStamp
  moonset: UnixTimeStamp
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

type WeatherData = {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: {
    dt: 1686014575
    sunrise: 1685957819
    sunset: 1686012875
    temp: 20.47
    feels_like: 20.06
    pressure: 1012
    humidity: 57
    dew_point: 11.67
    uvi: 0
    clouds: 0
    visibility: 10000
    wind_speed: 2.06
    wind_deg: 270
    weather: [
      {
        id: 800
        main: 'Clear'
        description: 'clear sky'
        icon: '01n'
      }
    ]
  }
  minutely: Minutely[]
  hourly: Hourly[]
  daily: Daily[]
}
