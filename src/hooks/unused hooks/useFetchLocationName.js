import { useState, useCallback } from 'react'
import axios from 'axios'

export default function useFetchLocationName() {
  const [locationName, setLocationName] = useState({})

  const fetchLocationName = useCallback(
    async ({ latitude, longitude }) => {
      console.log('Geocoding API call (hook)')

      const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY
      const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

      try {
        const response = await axios.get(url)

        const geocodingResult = response.data
        const city = geocodingResult[0].name
        const country = geocodingResult[0].country
        setLocationName({ city, country })
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log(`Geocoding Reverse Error: ${err.message}`)
          setLocationName({ city: '', country: '' })
        }
      }
    },
    [setLocationName]
  )

  return [locationName, fetchLocationName]
}
