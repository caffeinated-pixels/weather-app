import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function CurrentWeatherMain() {
  const { weatherData, weatherIcon, isLoading } = useContext(WeatherDataContext)
  let currentTemp = 0
  let weatherDescription = ''

  if (!isLoading) {
    currentTemp = Math.round(weatherData.current.temp)
    weatherDescription = weatherData.current.weather[0].description
  }

  return (
    <div className="current-main">
      <div className="main-top">
        <div className="main-weather-icon">
          {<img src={weatherIcon.small} alt={weatherDescription} />}
        </div>

        <div className="main-temp-summary">
          <p className="main-current-temp">{currentTemp}°C</p>
          <p className="main-minmax-temp">18°C / 25°C</p>
        </div>
      </div>

      <div className="main-bottom">
        <p className="main-description">overcast clouds</p>
        <p className="main-feels-like">feels like 23°C</p>
        <p className="main-wind">5km/h WSW</p>
      </div>
    </div>
  )
}
