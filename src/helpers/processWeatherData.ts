import { ProcessedDailyData,ProcessedHourlyData } from '../components'
import { FullWeatherData,ProcessedWeatherData } from '../types/openWeatherData'
import { Units } from '../WeatherDataContext'
import { calcWindIconRotation } from './calcWindIconRotation'
import { generateIconInfo } from './generateIconInfo'
import { getWindDirection } from './getWindDirection'

export const processWeatherData = (
  weatherData: FullWeatherData,
  units: Units
): ProcessedWeatherData => {
  const { current, daily, hourly } = weatherData

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
      ? (current.wind_speed * 3.6).toFixed(1) + 'km/h'
      : current.wind_speed + ' mph'
  /* for metric, API returns m/s - so we convert to km/h (m/s * 3.6)
      for imperial, API returns mph - so no conversion necessary */

  const windDirection = getWindDirection(current.wind_deg)
  const windIconRotation = calcWindIconRotation(current.wind_deg)

  // VISIBILITY
  const visibility =
    units === 'metric'
      ? (current.visibility / 1000).toFixed(1) + 'km'
      : (current.visibility * 0.00062137).toFixed(1) + 'mi'
  /* API always returns metres regardless of unit param
        for metric, convert to km (m / 1000)
        for imperial, convert to mi (m * 0.00062137)
      */

  // OTHER WEATHER DATA VALUES
  const precipProb = (hourly[0].pop * 100).toFixed(0) + '%'
  const humidity = current.humidity + '%'
  const dewPoint = Math.round(current.dew_point) + tempUnit
  const uvIndex = current.uvi.toFixed(1)
  const pressure = current.pressure + 'hPa'

  // PROCESS HOULRY & DAILY DATA
  const hourlyBoxes = ProcessedHourlyData(hourly, units)
  const dailyBoxes = ProcessedDailyData(daily, units)

  return {
    iconUrl,
    iconAltText,
    weatherDescription,
    currentTemp,
    minTemp,
    maxTemp,
    feelsLikeTemp,
    windSpeed,
    windDirection,
    windIconRotation,
    visibility,
    precipProb,
    humidity,
    dewPoint,
    uvIndex,
    pressure,
    hourlyBoxes,
    dailyBoxes,
  }
}
