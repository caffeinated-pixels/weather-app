import React, { useState, useEffect, useCallback } from 'react'
// import getUserLocation from './helpers/getUserLocation'

const WeatherDataContext = React.createContext()

function WeatherDataContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [locationData, setLocation] = useState({})
  const [weatherData, setWeatherData] = useState({})

  // const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall'
  // const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY
  // const lat = '43.651070'
  // const lon = '-79.347015'
  // const units = 'metric'
  //
  // const fullUrl = `${baseUrl}?lat=${lat}&lon=${lon}&units=${units}&APPID=${apiKey}`

  const getUserLocation = useCallback(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    function success(pos) {
      const userCoords = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      }

      setLocation(userCoords)
      fetchWeatherData(userCoords)
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`)
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
  }, [])

  async function fetchWeatherData({ latitude, longitude }) {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall'
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY
    const units = 'metric'

    const fullUrl = `${baseUrl}?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${apiKey}`

    try {
      const response = await fetch(fullUrl)

      if (!response.ok) throw Error('Fetch request to Open Weather API failed')

      const weatherData = await response.json()
      setWeatherData(weatherData)
    } catch (error) {
      console.log(error)
    } finally {
      // NOTE: this will execute last regardless of try/catch outcome, so may need to refactor for dealing with fetch errors
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUserLocation()
  }, [getUserLocation])

  return (
    <WeatherDataContext.Provider
      value={{ locationData, weatherData, isLoading }}
    >
      {children}
    </WeatherDataContext.Provider>
  )
}

export { WeatherDataContextProvider, WeatherDataContext }
