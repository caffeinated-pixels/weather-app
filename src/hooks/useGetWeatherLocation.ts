import { useState, useCallback } from 'react'
import { fetchGeocodingAPI } from '../helpers/fetchGeocodingReverse'

export const useGetWeatherLocation = () => {
  const [weatherLocation, setWeatherLocation] = useState<LocationData | null>(
    null
  )

  const getWeatherLocation: GetWeatherLocation = useCallback(
    (selectedLocation) => {
      if (selectedLocation) {
        // If the user has already selected a location, we set that to state;
        setWeatherLocation(selectedLocation)
        return
      }

      // else get location from the browser
      // define options + functions to run on success & error
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }

      async function success(pos: GeolocationPosition) {
        const latitude = pos.coords.latitude
        const longitude = pos.coords.longitude

        // now call Geocoding API to get city name & country
        const [city, country] = await fetchGeocodingAPI({ latitude, longitude })

        setWeatherLocation({ latitude, longitude, city, country })
      }

      function error(err: GeolocationPositionError) {
        console.warn(`ERROR(${err.code}): ${err.message}`)

        // if failed to get location, set the location to Toronto
        setWeatherLocation({
          latitude: 43.7001,
          longitude: -79.4163,
          city: 'Toronto',
          country: 'CA',
        })
      }

      navigator.geolocation.getCurrentPosition(success, error, options)
    },
    []
  )

  return { weatherLocation, getWeatherLocation }
}
