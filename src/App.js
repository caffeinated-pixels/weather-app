import React, { useContext } from 'react'
import Header from './components/Header'
import LoadingScreen from './components/LoadingScreen'

import LocationBar from './components/LocationBar'
import CurrentWeather from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
import DailyForecast from './components/DailyForecast'
import Footer from './components/Footer'

import { WeatherDataContext } from './WeatherDataContext'

export default function App() {
  const { isLoading } = useContext(WeatherDataContext)

  const appClassName = isLoading ? 'app app-loading' : 'app'

  return (
    <div className={appClassName}>
      <Header />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <LocationBar />
          <CurrentWeather />
          <HourlyForecast />
          <DailyForecast />
        </>
      )}
      <Footer />
    </div>
  )
}
