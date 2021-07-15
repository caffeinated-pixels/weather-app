import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function CurrentWeather() {
  const { weatherData, weatherIcon, isLoading } = useContext(WeatherDataContext)
  let currentTemp = 0
  let weatherDescription = ''

  if (!isLoading) {
    currentTemp = Math.round(weatherData.current.temp)
    weatherDescription = weatherData.current.weather[0].description
  }

  return (
    <>
      <h2>
        Current temp {currentTemp}
        °C
      </h2>
      {<img src={weatherIcon.small} alt={weatherDescription} />}
    </>
  )
}
