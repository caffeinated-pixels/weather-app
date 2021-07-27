import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function DailyForecast() {
  const { processedWeatherData } = useContext(WeatherDataContext)
  const { dailyBoxes } = processedWeatherData

  return <section className="daily-forecast">{dailyBoxes}</section>
}
