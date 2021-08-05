import { useState, useCallback } from 'react'
import fetchGeocodingAPI from '../helpers/fetchGeocodingReverse'

export default function useGetWeatherLocation() {
  const [weatherLocation, setWeatherLocation] = useState({})

  const getWeatherLocation = useCallback(selectedLocation => {
    if (selectedLocation) {
      // If the user has already selected a location, we set that to state;
      console.log('getWeatherLocation param')
      setWeatherLocation(selectedLocation)
      return
    }

    // else get location from the browser
    console.log('get getCurrentPosition call')

    // define options + functions to run on success & error
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

      // if failed to get location, set the location to Toronto
      setWeatherLocation({
        latitude: 43.7001,
        longitude: -79.4163,
        city: 'Toronto',
        country: 'CA'
      })
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
  }, [])

  return [weatherLocation, getWeatherLocation]
}
