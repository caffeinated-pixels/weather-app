import React, { useState } from 'react'

const WeatherDataContext = React.createContext()

function WeatherDataContextProvider({ children }) {
  // const [weatherData, setWeatherData] = useState([])
  const [locationData] = useState('Toronto, CA')

  return (
    <WeatherDataContext.Provider value={locationData}>
      {children}
    </WeatherDataContext.Provider>
  )
}

export { WeatherDataContextProvider, WeatherDataContext }
