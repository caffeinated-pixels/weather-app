import React, { useState, useEffect } from 'react'
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

  async function getUserLocation() {
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
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`)
    }

    try {
      const pos = await new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
      )
      success(pos)
    } catch (err) {
      console.log(error(err))
    }
  }

  async function fetchWeatherData() {
    try {
      const response = await fetch('./weatherDataPlaceholder.json')

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
    async function callAPIs() {
      await getUserLocation()
      setTimeout(() => fetchWeatherData(), 1000)
    }

    callAPIs()
  }, [])

  return (
    <WeatherDataContext.Provider
      value={{ locationData, weatherData, isLoading }}
    >
      {children}
    </WeatherDataContext.Provider>
  )
}

export { WeatherDataContextProvider, WeatherDataContext }
