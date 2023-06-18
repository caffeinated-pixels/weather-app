import { useContext } from 'react'
import Header from './components/Header'
import LoadingScreen from './components/LoadingScreen'
import { ErrorScreen } from './components/ErrorScreen'

import { ControlsBar } from './components/ControlsBar'
import { CurrentWeather } from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
import { DailyForecast } from './components/DailyForecast'
import Footer from './components/Footer'

import { WeatherDataContext } from './WeatherDataContext'
import 'simplebar-react/dist/simplebar.min.css'

export const App = () => {
  const { isLoading, isError } = useContext(WeatherDataContext)

  // class for setting num of grid rows
  const appClassName = isLoading || isError ? 'app app-loading' : 'app'

  const mainContent = isLoading ? (
    <LoadingScreen />
  ) : isError ? (
    <ErrorScreen />
  ) : (
    <>
      <ControlsBar />
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
    </>
  )

  return (
    <div className={appClassName}>
      <Header />
      {mainContent}
      <Footer />
    </div>
  )
}
