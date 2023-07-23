import 'simplebar-react/dist/simplebar.min.css'

import {
  ControlsBar,
  CurrentWeather,
  DailyForecast,
  ErrorScreen,
  Footer,
  Header,
  HourlyForecast,
  LoadingScreen,
} from './components'
import { useWeatherDataContext } from './hooks'

export const App = () => {
  const { isLoading, isError } = useWeatherDataContext()

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
