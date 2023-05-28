import { useState, useCallback } from 'react'
import { processWeatherData } from '../helpers/processWeatherData'

export default function useFetchWeatherData() {
  const [weatherData, setWeatherData] = useState({
    weatherData: {},
    isLoading: true,
    isError: false,
    errorMsg: '',
  })

  const fetchWeatherData = useCallback(
    async (locationData, units = 'metric') => {
      setWeatherData((prev) => ({ ...prev, isLoading: true }))

      /* instead of calling the API directly, we do it via a netlify
       (serverless) function; this lets us hide the API from the front-end */
      const netlifyFunctionCall = `/.netlify/functions/fetchWeatherData?lat=${locationData.latitude}&lon=${locationData.longitude}&units=${units}`

      try {
        const response = await fetch(netlifyFunctionCall)

        const weatherData = await response.json()
        const processedWeatherData = processWeatherData(weatherData, units)
        setWeatherData({ weatherData, processedWeatherData, isLoading: false })
      } catch (err) {
        console.log(`Weather API Error: ${err.message}`)

        setWeatherData((prev) => ({
          weatherData: {},
          isLoading: false,
          isError: true,
          errorMsg: err.message,
        }))
      }
    },
    [setWeatherData]
  )

  return [weatherData, fetchWeatherData]
}
