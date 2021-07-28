import React, { useEffect, useState } from 'react'
// import useBrowserGeolocation from './hooks/useBrowserGeolocation'
import useGetWeatherLocation from './hooks/useGetWeatherLocation'
import useFetchWeatherData from './hooks/useFetchWeatherData'
import useFetchGeocodingDirect from './hooks/useFetchGeocodingDirect'

const WeatherDataContext = React.createContext()

// default coords to be used if can't get browser location
const torontoCoords = {
  latitude: 43.7001,
  longitude: -79.4163
}

function WeatherDataContextProvider({ children }) {
  console.log('context rerender')
  const [units, setUnits] = useState('metric')
  // const [browserGeolocation, getBrowserGeolocation] = useBrowserGeolocation()
  const [weatherLocation, getWeatherLocation] = useGetWeatherLocation()
  const [locationResults, fetchLocationResults] = useFetchGeocodingDirect()
  const [
    { processedWeatherData, isLoading },
    fetchWeatherData
  ] = useFetchWeatherData(torontoCoords)

  const handleChangeUnits = event => {
    setUnits(event.target.id)
  }

  const handleSearchSubmit = (e, searchInput) => {
    e.preventDefault()
    console.log('submission detected!')
    console.log(searchInput)
    fetchLocationResults(searchInput)
  }

  // after mounting, get user's coords from browser
  useEffect(() => {
    console.log('1st context use effect')
    getWeatherLocation()
  }, [getWeatherLocation])

  /* once we have the user's coords, we can call the weather API
  we also need to re-call the API if units change */
  useEffect(() => {
    console.log('2nd context use effect')

    if (weatherLocation.latitude) {
      fetchWeatherData(weatherLocation, units)
    }
  }, [units, weatherLocation, fetchWeatherData])

  return (
    <WeatherDataContext.Provider
      value={{
        weatherLocation,
        processedWeatherData,
        isLoading,
        units,
        handleChangeUnits,
        getWeatherLocation,
        handleSearchSubmit
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  )
}

export { WeatherDataContextProvider, WeatherDataContext }
