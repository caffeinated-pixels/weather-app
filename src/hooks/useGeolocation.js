import { useState, useCallback } from 'react'

export default function useGeolocation() {
  const [userLocation, setLocation] = useState({})

  const getUserLocation = useCallback(async () => {
    console.log('get getCurrentPosition call')
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    function success(pos) {
      const userCoords = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      }

      setLocation(userCoords)
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`)
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
  }, [])

  return [userLocation, getUserLocation]
}
