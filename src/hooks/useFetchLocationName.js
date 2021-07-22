import { useState, useCallback } from 'react'

export default function useFetchLocationName() {
  const [locationName, setLocationName] = useState({})

  const fetchLocationName = useCallback(
    async ({ latitude, longitude }) => {
      console.log('Geocoding API call (hook)')

      const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY
      const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

      try {
        const response = await fetch(url)

        if (!response.ok) throw Error('Fetch request to Geocoding API failed')

        const geocodingResult = await response.json()
        const city = geocodingResult[0].name
        const country = geocodingResult[0].country
        setLocationName({ city, country })
      } catch (error) {
        console.log(error)
      }
    },
    [setLocationName]
  )

  return [locationName, fetchLocationName]
}
