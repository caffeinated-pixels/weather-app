const getUserLocation = async () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  function success(pos) {
    const crd = pos.coords
    console.log('Your current position is:')
    console.log(`Latitude : ${crd.latitude}`)
    console.log(`Longitude: ${crd.longitude}`)
    console.log(`More or less ${crd.accuracy} meters.`)
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  // const prom = new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options))

  try {
    const pos = await new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    )
    // const lat = pos.coords.latitude
    success(pos)
    // console.log(lat)
  } catch (err) {
    console.log(error(err))
  }
}

export default getUserLocation
