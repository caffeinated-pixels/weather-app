import React, { useEffect, useState } from 'react'
import useBrowserGeolocation from './hooks/useBrowserGeolocation'
import useFetchWeatherData from './hooks/useFetchWeatherData'
import useFetchLocationName from './hooks/useFetchLocationName'

const WeatherDataContext = React.createContext()

function WeatherDataContextProvider({ children }) {
  console.log('context rerender')
  const [units, setUnits] = useState('metric')
  const [browserGeolocation, getBrowserGeolocation] = useBrowserGeolocation()
  const [locationName, fetchLocationName] = useFetchLocationName()
  const [{ weatherData, isLoading }, fetchWeatherData] = useFetchWeatherData({
    latitude: 43.7001,
    longitude: -79.4163
  })

  const handleChangeUnits = event => {
    setUnits(event.target.id)
    fetchWeatherData(browserGeolocation, event.target.id)
  }

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
      value={{ locationName, weatherData, isLoading, units, handleChangeUnits }}
    >
      {children}
    </WeatherDataContext.Provider>
  )
}

export { WeatherDataContextProvider, WeatherDataContext }
