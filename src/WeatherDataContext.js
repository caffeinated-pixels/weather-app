import React, { useEffect, useState } from 'react'
import useBrowserGeolocation from './hooks/useBrowserGeolocation'
import useFetchWeatherData from './hooks/useFetchWeatherData'
import useFetchLocationName from './hooks/useFetchLocationName'

const WeatherDataContext = React.createContext()

// default coords to be used if can't get browser location
const torontoCoords = {
  latitude: 43.7001,
  longitude: -79.4163
}

function WeatherDataContextProvider({ children }) {
  console.log('context rerender')
  const [units, setUnits] = useState('metric')
  const [browserGeolocation, getBrowserGeolocation] = useBrowserGeolocation()
  const [locationName, fetchLocationName] = useFetchLocationName()
  const [
    { weatherData, processedWeatherData, isLoading },
    fetchWeatherData
  ] = useFetchWeatherData(torontoCoords)

  const handleChangeUnits = event => {
    setUnits(event.target.id)
  }

  // after mounting, get user's coords from browser
  useEffect(() => {
    console.log('1st context use effect')
    getBrowserGeolocation()
  }, [getBrowserGeolocation])

  /* once we have the user's coords, we can call the weather API
  we also need to re-call the API if units change */
  useEffect(() => {
    console.log('2nd context use effect')

    if (browserGeolocation.latitude) {
      fetchWeatherData(browserGeolocation, units)
    }
  }, [units, browserGeolocation, fetchWeatherData, fetchLocationName])

  /* we need to call a different API to get the city name & country
  only re-call the API if the location changes */
  useEffect(() => {
    console.log('3rd context use effect')
    if (browserGeolocation.latitude) {
      fetchLocationName(browserGeolocation)
    }
  }, [browserGeolocation, fetchLocationName])

  return (
    <WeatherDataContext.Provider
      value={{
        locationName,
        weatherData,
        processedWeatherData,
        isLoading,
        units,
        handleChangeUnits
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  )
}

export { WeatherDataContextProvider, WeatherDataContext }
