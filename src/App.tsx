import { useContext } from 'react'
import {
  Header,
  LoadingScreen,
  ErrorScreen,
  ControlsBar,
  CurrentWeather,
  HourlyForecast,
  DailyForecast,
  Footer,
} from './components'

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
