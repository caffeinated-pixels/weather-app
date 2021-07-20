import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'
import generateIconInfo from '../helpers/generateIconInfo'
import getWindDirection from '../helpers/getWindDirection'

export default function CurrentWeatherMain() {
  const { weatherData } = useContext(WeatherDataContext)
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

  return (
    <div className="current-main">
      <div className="main-top">
        <div className="main-weather-icon">
          {<img src={iconUrl} alt={iconAltText} />}
        </div>

        <div className="main-temp-summary">
          <p className="main-current-temp">{currentTemp}°C</p>
          <p className="main-minmax-temp">
            {minTemp}°C / {maxTemp}°C
          </p>
        </div>
      </div>

      <div className="main-bottom">
        <p className="main-description">{weatherDescription}</p>
        <p className="main-feels-like">feels like {feelsLikeTemp}°C</p>
        <p className="main-wind">
          {windSpeedKmh}km/h {windDirection}
        </p>
      </div>
    </div>
  )
}
