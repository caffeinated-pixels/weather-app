import generateIconInfo from './generateIconInfo'
import getWindDirection from './getWindDirection'

export default function processWeatherData(weatherData, units) {
  console.log('processing weather data')
  const { current, daily } = weatherData

  const [iconUrl, iconAltText] = generateIconInfo(current.weather[0], '4x')

  const currentTemp = Math.round(current.temp)
  const weatherDescription = current.weather[0].description

  const minTemp = Math.round(daily[0].temp.min)
  const maxTemp = Math.round(daily[0].temp.max)

  const feelsLikeTemp = Math.round(current.feels_like)
  const windSpeedMs = current.wind_speed
  const windSpeedKmh = (windSpeedMs * 3.6).toFixed(1)
  const windDirection = getWindDirection(current.wind_deg)

  return {
    iconUrl,
    iconAltText,
    currentTemp,
    weatherDescription,
    minTemp,
    maxTemp,
    feelsLikeTemp,
    windSpeedKmh,
    windDirection
  }
}
