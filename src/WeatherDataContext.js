import React, { useState, useEffect } from 'react'

const WeatherDataContext = React.createContext()

function WeatherDataContextProvider({ children }) {
  const [weatherData, setWeatherData] = useState({})
  const [locationData] = useState('Toronto, CA')

  // const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall'
  // const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY
  // const lat = '43.651070'
  // const lon = '-79.347015'
  // const units = 'metric'
  //
  // const fullUrl = `${baseUrl}?lat=${lat}&lon=${lon}&units=${units}&APPID=${apiKey}`

  useEffect(() => {
    fetch('./weatherDataPlaceholder.json')
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <WeatherDataContext.Provider value={{ locationData, weatherData }}>
      {children}
    </WeatherDataContext.Provider>
  )
}

export { WeatherDataContextProvider, WeatherDataContext }
