import { useState, useCallback } from 'react'

export default function useBrowserGeolocation() {
  const [userLocation, setLocation] = useState({})

  const getBrowserGeolocation = useCallback(() => {
    console.log('get getCurrentPosition call')
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    async function success(pos) {
      const latitude = pos.coords.latitude
      const longitude = pos.coords.longitude

      const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY
      const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

      try {
        const response = await fetch(url)
        const geocodingResult = await response.json()
        const city = geocodingResult[0].name
        const country = geocodingResult[0].country
        setLocation({ latitude, longitude, city, country })
      } catch (error) {
        console.log(`Geocoding error: ${error}`)
      }
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`)
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
  }, [])

  return [userLocation, getBrowserGeolocation]
}
