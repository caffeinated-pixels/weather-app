import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function HourlyForecast() {
  const { processedWeatherData } = useContext(WeatherDataContext)

  const { hourlyBoxes } = processedWeatherData

  return <section className="hourly-forecast-ribbon">{hourlyBoxes}</section>
}
