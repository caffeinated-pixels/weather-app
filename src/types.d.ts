declare module '*.png'

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

type Temp = {
  day: number
  min: number
  max: number
  night: number
  eve: number
  morn: number
}

type FeelsLike = {
  day: number
  night: number
  eve: number
  morn: number
}

type DailyData = {
  dt: UnixTimeStamp
  sunrise: UnixTimeStamp
  sunset: UnixTimeStamp
  moonrise: UnixTimeStamp
  moonset: UnixTimeStamp
  moon_phase: UnixTimeStamp
  temp: Temp
  feels_like: FeelsLike
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
  temp: Temp
  feels_like: FeelsLike
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

type ProcessedWeatherData = {
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

type WeatherDataResults = {
  weatherData: WeatherData | null
  processedWeatherData: ProcessedWeatherData | null
  isLoading: boolean
  isError: boolean
  errorMsg: string
}

// location data that gets returned from the GeocodingDirect api
type SearchLocation = {
  name: string
  country: string
  lat: number
  lon: number
  state: string
  local_names: Record<string, string>
}

type GeocodingApiResults = {
  name: string
  local_names: Record<string, string>
  lat: number
  lon: number
  country: string
  state: string
}

type LocationResults = {
  resultsArr: GeocodingApiResults[]
  searchComplete: boolean
  searchMatchFail: boolean
  apiError: boolean
  errorMsg: string
}

// location data that gets returned from the WeatherData query
type LocationData = {
  latitude: number
  longitude: number
  city: string
  country: string
  state?: string
}

type HandleChangeUnits = (event: ChangeEvent<HTMLButtonElement>) => void

type HandleSearchSubmit = (
  e: ChangeEvent<HTMLInputElement>,
  searchInput: string
) => void

type HandleResultsChoice = (index: number, e?: React.KeyboardEvent) => void

type GetWeatherLocation = (selectedLocation?: LocationData) => void

type FetchLocationResults = (cityNameToQuery?: string) => Promise<void>

type WeatherDataContext = {
  weatherLocation: LocationData | null
  processedWeatherData: ProcessedWeatherData | null
  isLoading: boolean
  isError: boolean
  units: string
  locationResults: LocationResults
  handleChangeUnits: HandleChangeUnits
  getWeatherLocation: GetWeatherLocation
  handleSearchSubmit: HandleSearchSubmit
  handleResultsChoice: HandleResultsChoice
  fetchLocationResults: FetchLocationResults
}
