import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

export default function HourlyForecast() {
  const { processedWeatherData } = useContext(WeatherDataContext)

  const { hourlyBoxes } = processedWeatherData

  return (
    <section className="hourly-forecast-ribbon">
      <SimpleBar>{hourlyBoxes}</SimpleBar>
    </section>
  )
}
