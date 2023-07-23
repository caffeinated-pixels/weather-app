import { useContext } from 'react'

import { WeatherDataContext } from '../WeatherDataContext'

export const useWeatherDataContext = () => {
  const context = useContext(WeatherDataContext)
  if (!context) {
    throw new Error(
      'useWeatherData must be used within a WeatherDataContextProvider'
    )
  }

  return context
}
