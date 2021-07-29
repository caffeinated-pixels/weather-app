import { useState, useCallback } from 'react'

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
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityNameToQuery}&limit=5&appid=${apiKey}`

      try {
        const response = await fetch(url)

        if (!response.ok)
          throw Error('Fetch request to Geocoding Direct API failed')

        const geocodingApiResults = await response.json()
        // console.log(geocodingApiResults)
        setLocationResults(geocodingApiResults)
      } catch (error) {
        console.log(error)
      }
    },
    [setLocationResults]
  )

  return [locationResults, fetchLocationResults]
}
