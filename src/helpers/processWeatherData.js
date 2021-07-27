import generateIconInfo from './generateIconInfo'
import getWindDirection from './getWindDirection'

export default function processWeatherData(weatherData, units) {
  console.log('processing weather data')
  const { current, daily } = weatherData

  // ICON & DESCRIPTION
  const [iconUrl, iconAltText] = generateIconInfo(current.weather[0], '4x')
  const weatherDescription = current.weather[0].description

  // TEMPERATURES
  const tempUnit = units === 'metric' ? '°C' : '°F'
  const currentTemp = Math.round(current.temp) + tempUnit
  const minTemp = Math.round(daily[0].temp.min) + tempUnit
  const maxTemp = Math.round(daily[0].temp.max) + tempUnit
  const feelsLikeTemp = Math.round(current.feels_like) + tempUnit

  // WIND INFO
  const windSpeed =
    units === 'metric'
      ? (current.wind_speed * 3.6).toFixed(1) + ' km/h'
      : current.wind_speed + ' mph'
  /* for metric, wind is in m/s - so we convert to km/h (m/s * 3.6)
      for imperial, it's in mph - so no conversion necessary */

  const windDirection = getWindDirection(current.wind_deg)

  return {
    iconUrl,
    iconAltText,
    weatherDescription,
    currentTemp,
    minTemp,
    maxTemp,
    feelsLikeTemp,
    windSpeed,
    windDirection
  }
}
