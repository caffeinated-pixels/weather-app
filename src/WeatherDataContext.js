import React, { useState, useEffect } from 'react'
import getUserLocation from './helpers/getUserLocation'

const WeatherDataContext = React.createContext()
getUserLocation()

function WeatherDataContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [weatherData, setWeatherData] = useState({})
  const [locationData] = useState('Toronto, CA')

  // const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall'
  // const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY
  // const lat = '43.651070'
  // const lon = '-79.347015'
  // const units = 'metric'
  //
  // const fullUrl = `${baseUrl}?lat=${lat}&lon=${lon}&units=${units}&APPID=${apiKey}`

  // useEffect(() => {
  //   fetch('./weatherDataPlaceholder.json')
  //     .then(response => response.json())
  //     .then(data => processWeatherData(data))
  //     .catch(error => console.log(error))
  // }, [])

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch('./weatherDataPlaceholder.json')

        if (!response.ok)
          throw Error('Fetch request to Open Weather API failed')

        const weatherData = await response.json()
        setWeatherData(weatherData)
      } catch (error) {
        console.log(error)
      } finally {
        // NOTE: this will execute last regardless of try/catch outcome, so may need to refactor for dealing with fetch errors
        setIsLoading(false)
      }
    }

    setTimeout(() => fetchItems(), 1000)
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
