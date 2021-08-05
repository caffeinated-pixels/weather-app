import { useState, useCallback } from 'react'
import axios from 'axios'

/* In 'direct' mode, we can query the Open Weather Geocoding API with a city
name. It will return an array of results (up to 5 using the limit param) */

export default function useFetchGeocodingDirect() {
  const [locationResults, setLocationResults] = useState({})

  const fetchLocationResults = useCallback(
    async cityNameToQuery => {
      if (!cityNameToQuery) {
        setLocationResults({})
        return
        // if no argument provided, clear the results and return
      }

      console.log('Geocoding Direct API call (hook)')

      const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityNameToQuery}&limit=5&appid=${apiKey}`

      try {
        const response = await axios.get(url)
        const geocodingApiResults = response.data

        // console.log(geocodingApiResults)
        setLocationResults(geocodingApiResults)
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log(`Geocoding Direct Error: ${err.message}`)
        }
      }
    },
    [setLocationResults]
  )

  return [locationResults, fetchLocationResults]
}
