export type Coordinates = {
  latitude: number
  longitude: number
}

export type GeocodingApiResult = {
  name: string
  country: string
  lat: number
  lon: number
  state: string
  local_names: Record<string, string>
}

// TODO: refactor weather data types to be more DRY
export type CurrentWeather = {
  id: number
  main: string
  description: string
  icon: string
}

type Temp = {
  min: number
  max: number
  day: number
  night: number
  eve: number
  morn: number
}

type FeelsLikeDaytimes = Omit<Temp, 'min' | 'max'>

type UnixTimeStamp = number

export type DailyData = {
  dt: UnixTimeStamp
  sunrise: UnixTimeStamp
  sunset: UnixTimeStamp
  moonrise: UnixTimeStamp
  moonset: UnixTimeStamp
  moon_phase: UnixTimeStamp
  temp: Temp
  feels_like: FeelsLikeDaytimes
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

export type HourlyData = {
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
  temp: Temp
  feels_like: FeelsLikeDaytimes
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

export type WeatherData = {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: {
    dt: UnixTimeStamp
    sunrise: UnixTimeStamp
    sunset: UnixTimeStamp
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
    weather: [
      {
        id: number
        main: string
        description: string
        icon: string
      }
    ]
  }
  minutely: Minutely[]
  hourly: Hourly[]
  daily: Daily[]
}

export type ProcessedWeatherData = {
  iconUrl: string
  iconAltText: string
  weatherDescription: string
  currentTemp: string
  minTemp: string
  maxTemp: string
  feelsLikeTemp: string
  windSpeed: string
  windDirection: string
  windIconRotation: number
  visibility: string
  precipProb: string
  humidity: string
  dewPoint: string
  uvIndex: string
  pressure: string
  hourlyBoxes: JSX.Element
  dailyBoxes: JSX.Element
}

export type WeatherDataResults = {
  weatherData: WeatherData | null
  processedWeatherData: ProcessedWeatherData | null
  isLoading: boolean
  isError: boolean
  errorMsg: string
}

export type LocationResults = {
  resultsArr: GeocodingApiResult[]
  searchComplete: boolean
  searchMatchFail: boolean
  apiError: boolean
  errorMsg: string
}

// location data that gets returned from the WeatherData query
export type LocationData = Coordinates & {
  city: string
  country: string
  state?: string
}
