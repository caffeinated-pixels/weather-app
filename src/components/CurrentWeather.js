import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function CurrentWeather() {
  const { weatherData, weatherIcon } = useContext(WeatherDataContext)

  return (
    <>
      <h2>
        Current temp{' '}
        {weatherData.current && Math.round(weatherData.current.temp)}
        °C
      </h2>
      <p>{weatherIcon.small}</p>
    </>
  )
}
