import React from 'react'
import CurrentWeatherMain from './CurrentWeatherMain'
import CurrentWeatherExtra from './CurrentWeatherExtra'

export default function CurrentWeather() {
  return (
    <section className="current-weather">
      <CurrentWeatherMain />
      <CurrentWeatherExtra />
    </section>
  )
}
