import React, { useEffect, useState } from 'react'
import useGetWeatherLocation from './hooks/useGetWeatherLocation'
import useFetchWeatherData from './hooks/useFetchWeatherData'
import useFetchGeocodingDirect from './hooks/useFetchGeocodingDirect'

const WeatherDataContext = React.createContext()

function WeatherDataContextProvider({ children }) {
  console.log('context rerender')
  const [units, setUnits] = useState('metric')
  const [weatherLocation, getWeatherLocation] = useGetWeatherLocation()
  const [locationResults, fetchLocationResults] = useFetchGeocodingDirect()

  console.log(locationResults)

  const [
    { processedWeatherData, isLoading, isError },
    fetchWeatherData
  ] = useFetchWeatherData()

  const handleChangeUnits = event => {
    setUnits(event.target.id)
  }

  const handleSearchSubmit = (e, searchInput) => {
    e.preventDefault()
    console.log('submission detected!')
    console.log(searchInput)
    fetchLocationResults(searchInput)
  }

  const handleResultsChoice = (index, e) => {
    console.log(index)

    // check if called by onKeyDown (e is truthy); return if not Enter key
    if (e && e.key !== 'Enter') {
      return
    }

    const resultChoice = {
      city: locationResults.resultsArr[index].name,
      country: locationResults.resultsArr[index].country,
      state: locationResults.resultsArr[index].state,
      latitude: locationResults.resultsArr[index].lat,
      longitude: locationResults.resultsArr[index].lon
    }

    console.log(resultChoice)

    getWeatherLocation(resultChoice)

    // call with no argument to clear results
    fetchLocationResults()
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
        isError,
        units,
        handleChangeUnits,
        getWeatherLocation,
        handleSearchSubmit,
        locationResults,
        handleResultsChoice,
        fetchLocationResults
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  )
}

export { WeatherDataContextProvider, WeatherDataContext }
