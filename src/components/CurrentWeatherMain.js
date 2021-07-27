import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function CurrentWeatherMain() {
  const { processedWeatherData } = useContext(WeatherDataContext)
  // console.log(processedWeatherData)

  const {
    iconUrl,
    iconAltText,
    currentTemp,
    weatherDescription,
    minTemp,
    maxTemp,
    feelsLikeTemp,
    windSpeedKmh,
    windDirection
  } = processedWeatherData

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
          {windSpeedKmh} km/h {windDirection}
        </p>
      </div>
    </div>
  )
}
