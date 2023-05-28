import { useState, useCallback } from 'react'
import { fetchGeocodingAPI } from '../helpers/fetchGeocodingReverse'

export default function useBrowserGeolocation() {
  const [browserGeolocation, setLocation] = useState({})

  const getBrowserGeolocation = useCallback(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }

    async function success(pos) {
      const latitude = pos.coords.latitude
      const longitude = pos.coords.longitude

      // now call Geocoding API to get city name & country
      const [city, country] = await fetchGeocodingAPI({ latitude, longitude })

      setLocation({ latitude, longitude, city, country })
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`)
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
  }, [])

  return [browserGeolocation, getBrowserGeolocation]
}
