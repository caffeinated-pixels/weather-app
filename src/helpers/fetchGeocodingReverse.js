/* In 'reverse' mode, we can query the Open Weather Geocoding API with lat & lon
coords to get the city name & country. It will return an array of results
(by default 1 but up to 5), but the first result should always be right. */

export default async function fetchGeocodingAPI({ latitude, longitude }) {
  console.log('fetch geocoding reverse API helper')
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY
  const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

  try {
    const response = await fetch(url)

    if (!response.ok) throw Error('Fetch request to Geocoding API failed')

    const geocodingResult = await response.json()
    const city = geocodingResult[0].name
    const country = geocodingResult[0].country
    return [city, country]
  } catch (error) {
    console.log(error)
  }
}
