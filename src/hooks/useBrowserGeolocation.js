import { useState, useCallback } from 'react'

export default function useBrowserGeolocation() {
  const [browserGeolocation, setLocation] = useState({})

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

      setLocation({ latitude, longitude })
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`)
    }

    navigator.geolocation.getCurrentPosition(success, error, options)
  }, [])

  return [browserGeolocation, getBrowserGeolocation]
}
