import React, { useEffect, useState } from 'react'
import useBrowserGeolocation from './hooks/useBrowserGeolocation'
import useFetchWeatherData from './hooks/useFetchWeatherData'

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
  const [
    { processedWeatherData, isLoading },
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
  }, [units, browserGeolocation, fetchWeatherData])

  return (
    <WeatherDataContext.Provider
      value={{
        browserGeolocation,
        processedWeatherData,
        isLoading,
        units,
        handleChangeUnits,
        getBrowserGeolocation
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  )
}

export { WeatherDataContextProvider, WeatherDataContext }
