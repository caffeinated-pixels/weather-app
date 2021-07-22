import { useState, useCallback } from 'react'

export default function useFetchWeatherData() {
  const [weatherData, setWeatherData] = useState({
    weatherData: {},
    isLoading: true
  })

  const fetchWeatherData = useCallback(
    async (locationData, units = 'metric') => {
      console.log('API call')
      const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall'
      const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY

      const fullUrl = `${baseUrl}?lat=${locationData.latitude}&lon=${locationData.longitude}&units=${units}&APPID=${apiKey}`

      try {
        const response = await fetch(fullUrl)

        if (!response.ok)
          throw Error('Fetch request to Open Weather API failed')

        const weatherData = await response.json()
        setWeatherData({ weatherData, isLoading: false })
      } catch (error) {
        console.log(error)
      }
    },
    [setWeatherData]
  )

  return [weatherData, fetchWeatherData]
}
