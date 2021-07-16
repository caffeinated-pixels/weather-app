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
      {<img src={weatherIcon.small} alt={weatherDescription} />}
      <h2>{currentTemp}°C</h2>
    </div>
  )
}
