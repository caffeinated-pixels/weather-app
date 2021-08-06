import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

export default function DailyForecast() {
  const { processedWeatherData } = useContext(WeatherDataContext)
  const { dailyBoxes } = processedWeatherData

  return (
    <section className="daily-forecast">
      <SimpleBar style={{ height: '100%' }}>{dailyBoxes}</SimpleBar>
    </section>
  )
}
