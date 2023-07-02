import { useState, useCallback } from 'react'
import { processWeatherData } from '../helpers/processWeatherData'
import { getErrorMessage } from '../helpers/getErrorMessage'

const initialState: WeatherDataResults = {
  weatherData: {},
  processedWeatherData: {},
  isLoading: true,
  isError: false,
  errorMsg: '',
}

export const useFetchWeatherData = () => {
  const [weatherData, setWeatherData] =
    useState<WeatherDataResults>(initialState)

  const fetchWeatherData = useCallback(
    async (locationData: LocationData, units = 'metric') => {
      setWeatherData((prev) => ({ ...prev, isLoading: true }))

      /* instead of calling the API directly, we do it via a netlify
       (serverless) function; this lets us hide the API from the front-end */
      const netlifyFunctionCall = `/.netlify/functions/fetchWeatherData?lat=${locationData.latitude}&lon=${locationData.longitude}&units=${units}`

      try {
        const response = await fetch(netlifyFunctionCall)

        const weatherData = await response.json()
        const processedWeatherData = processWeatherData(weatherData, units)

        setWeatherData({
          weatherData,
          processedWeatherData,
          isLoading: false,
          isError: false,
          errorMsg: '',
        })
        console.log('processedWeatherData', processedWeatherData)
      } catch (err) {
        const errorMessage = getErrorMessage(err)
        console.warn(`Weather API Error: ${errorMessage}`)

        setWeatherData({
          weatherData: {},
          processedWeatherData: {},
          isLoading: false,
          isError: true,
          errorMsg: errorMessage,
        })
      }
    },
    [setWeatherData]
  )

  return { weatherData, fetchWeatherData }
}
