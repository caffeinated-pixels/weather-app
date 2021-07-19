import React, { useState, useEffect } from 'react'

const WeatherDataContext = React.createContext()

function WeatherDataContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [weatherData, setWeatherData] = useState({})
  const [weatherIcon, setWeatherIcon] = useState({})
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
        processWeatherData(weatherData)
      } catch (error) {
        console.log(error)
      } finally {
        // NOTE: this will execute last regardless of try/catch outcome, so may need to refactor for dealing with fetch errors
        setIsLoading(false)
      }
    }

    fetchItems()
  }, [])

  function processWeatherData(data) {
    const iconCode = data.current.weather[0].icon
    const iconUrlBase = `https://openweathermap.org/img/wn/${iconCode}`

    setWeatherData(data)
    setWeatherIcon({
      small: `${iconUrlBase}@2x.png`,
      large: `${iconUrlBase}@4x.png`
    })
  }

  return (
    <WeatherDataContext.Provider
      value={{ locationData, weatherData, weatherIcon, isLoading }}
    >
      {children}
    </WeatherDataContext.Provider>
  )
}

export { WeatherDataContextProvider, WeatherDataContext }
