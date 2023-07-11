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

export type CurrentWeatherSummary = {
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

type SunTimes = {
  sunrise: UnixTimeStamp
  sunset: UnixTimeStamp
}

type MoonTimes = {
  moonrise: UnixTimeStamp
  moonset: UnixTimeStamp
  moon_phase: UnixTimeStamp
}

type SunAndMoonTimes = SunTimes & MoonTimes

type WindData = {
  wind_speed: number
  wind_deg: number
  wind_gust: number
}

type GeneralWeatherData = {
  dt: UnixTimeStamp
  temp: Temp
  feels_like: FeelsLikeDaytimes
  pressure: number
  humidity: number
  dew_point: number
  weather: CurrentWeatherSummary[]
  clouds: number
  pop: number
  uvi: number
}

export type DailyData = SunAndMoonTimes & WindData & GeneralWeatherData

export type HourlyData = WindData &
  GeneralWeatherData & {
    temp: number
    visibility: number
  }

type Minutely = {
  dt: UnixTimeStamp
  precipitation: number
}

type Daily = SunAndMoonTimes & WindData & GeneralWeatherData

type CurrentWeatherData = SunTimes &
  Omit<WindData, 'wind_gust'> &
  GeneralWeatherData & {
    temp: number
    visibility: number
    feels_like: number
  }

export type FullWeatherData = {
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
  current: CurrentWeatherData
  minutely: Minutely[]
  hourly: HourlyData[]
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
  weatherData: FullWeatherData | null
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

// location data that gets returned from the FullWeatherData query
export type LocationData = Coordinates & {
  city: string
  country: string
  state?: string
}
