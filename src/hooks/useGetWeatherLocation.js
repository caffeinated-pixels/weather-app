import { useState, useCallback } from 'react'
import fetchGeocodingAPI from '../helpers/fetchGeocodingReverse'

/* If the user has selected a location, we simply set that to state;
else we get the browser location and make an API call to get the city name */

export default function useGetWeatherLocation() {
  const [weatherLocation, setWeatherLocation] = useState({})

  const getWeatherLocation = useCallback(selectedLocation => {
    if (selectedLocation) {
      // setWeatherLocation(selectedLocation)
    } else {
      console.log('get getCurrentPosition call')
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }

      async function success(pos) {
        const latitude = pos.coords.latitude
        const longitude = pos.coords.longitude

        // now call Geocoding API to get city name & country
        const [city, country] = await fetchGeocodingAPI({ latitude, longitude })

        setWeatherLocation({ latitude, longitude, city, country })
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`)
      }

      navigator.geolocation.getCurrentPosition(success, error, options)
    }
  }, [])

  return [weatherLocation, getWeatherLocation]
}
