import { CurrentWeather } from '../types/openWeatherData'

export const generateIconInfo = (weather: CurrentWeather, size: string) => {
  const iconCode = weather.icon
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@${size}.png`
  const iconAltText = `Weather icon for ${weather.description}`

  return [iconUrl, iconAltText]
}
