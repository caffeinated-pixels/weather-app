import React, { useEffect } from 'react'
import useBrowserGeolocation from './hooks/useBrowserGeolocation'
import useFetchWeatherData from './hooks/useFetchWeatherData'
import useFetchLocationName from './hooks/useFetchLocationName'

const WeatherDataContext = React.createContext()

function WeatherDataContextProvider({ children }) {
  const [browserGeolocation, getBrowserGeolocation] = useBrowserGeolocation()
  const [{ weatherData, isLoading }, fetchWeatherData] = useFetchWeatherData({
    latitude: 43.7001,
    longitude: -79.4163
  })

  const [locationName, fetchLocationName] = useFetchLocationName()

  useEffect(() => {
    console.log('1st context use effect')
    getBrowserGeolocation()
  }, [getBrowserGeolocation])

  useEffect(() => {
    console.log('2nd context use effect')

    if (browserGeolocation.latitude) {
      fetchWeatherData(browserGeolocation)
      fetchLocationName(browserGeolocation)
    }
  }, [browserGeolocation, fetchWeatherData, fetchLocationName])

  return (
    <WeatherDataContext.Provider
      value={{ locationName, weatherData, isLoading }}
    >
      {children}
    </WeatherDataContext.Provider>
  )
}

export { WeatherDataContextProvider, WeatherDataContext }
