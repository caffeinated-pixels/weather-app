import React, { useEffect } from 'react'
import useGeolocation from './hooks/useGeolocation'
import useFetchWeatherData from './hooks/useFetchWeatherData'

const WeatherDataContext = React.createContext()

function WeatherDataContextProvider({ children }) {
  const [locationData, getUserLocation] = useGeolocation()
  const [{ weatherData, isLoading }, fetchWeatherData] = useFetchWeatherData({
    latitude: 43.7001,
    longitude: -79.4163
  })

  useEffect(() => {
    console.log('1st context use effect')
    getUserLocation()
  }, [getUserLocation])

  useEffect(() => {
    console.log('2nd context use effect')

    if (locationData.latitude) {
      fetchWeatherData(locationData)
    }
  }, [locationData, fetchWeatherData])

  return (
    <WeatherDataContext.Provider
      value={{ locationData, weatherData, isLoading }}
    >
      {children}
    </WeatherDataContext.Provider>
  )
}

export { WeatherDataContextProvider, WeatherDataContext }
