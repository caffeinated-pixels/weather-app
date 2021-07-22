import React, { useEffect } from 'react'
import useBrowserGeolocation from './hooks/useBrowserGeolocation'
import useFetchWeatherData from './hooks/useFetchWeatherData'

const WeatherDataContext = React.createContext()

function WeatherDataContextProvider({ children }) {
  const [browserGeolocation, getBrowserGeolocation] = useBrowserGeolocation()
  const [{ weatherData, isLoading }, fetchWeatherData] = useFetchWeatherData({
    latitude: 43.7001,
    longitude: -79.4163
  })

  useEffect(() => {
    console.log('1st context use effect')
    getBrowserGeolocation()
  }, [getBrowserGeolocation])

  useEffect(() => {
    console.log('2nd context use effect')

    if (browserGeolocation.latitude) {
      fetchWeatherData(browserGeolocation)
    }
  }, [browserGeolocation, fetchWeatherData])

  return (
    <WeatherDataContext.Provider
      value={{ browserGeolocation, weatherData, isLoading }}
    >
      {children}
    </WeatherDataContext.Provider>
  )
}

export { WeatherDataContextProvider, WeatherDataContext }
