import React from 'react'
import Header from './components/Header'
import LocationBar from './components/LocationBar'
import CurrentWeather from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
import DailyForecast from './components/DailyForecast'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Header />
      <LocationBar />
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
      <Footer />
    </div>
  )
}
