import { useState, useCallback } from 'react'
import axios from 'axios'
import processWeatherData from '../helpers/processWeatherData.js'

export default function useFetchWeatherData() {
  const [weatherData, setWeatherData] = useState({
    weatherData: {},
    isLoading: true
  })

  const fetchWeatherData = useCallback(
    async (locationData, units = 'metric') => {
      console.log('API call')

      // NOTE: in two minds about doing this! Might be something to change when I add in proper error handling
      setWeatherData(prev => ({ ...prev, isLoading: true }))

      const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall'
      const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY

      const fullUrl = `${baseUrl}?lat=${locationData.latitude}&lon=${locationData.longitude}&units=${units}&APPID=${apiKey}`

      try {
        const response = await axios.get(fullUrl)

        const weatherData = response.data
        const processedWeatherData = processWeatherData(weatherData, units)
        setWeatherData({ weatherData, processedWeatherData, isLoading: false })
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log(`Weather API Error: ${err.message}`)
        }
      }
    },
    [setWeatherData]
  )

  return [weatherData, fetchWeatherData]
}
