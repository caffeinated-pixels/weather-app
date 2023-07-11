import { Coordinates, GeocodingApiResult } from '../types/openWeatherData'
import { getErrorMessage } from './getErrorMessage'

/* In 'reverse' mode, we can query the Open Weather Geocoding API with lat & lon
coords to get the city name & country. It will return an array of results
(by default 1 but up to 5), but the first result should always be right. */
export const fetchGeocodingAPI = async ({
  latitude,
  longitude,
}: Coordinates) => {
  /* instead of calling the API directly, we do it via a netlify
   (serverless) function; this lets us hide the API from the front-end */
  const netlifyFunctionCall = `/.netlify/functions/fetchLocationReverse?lat=${latitude}&lon=${longitude}`

  try {
    const response = await fetch(netlifyFunctionCall)
    const geocodingResult: GeocodingApiResult[] = await response.json()

    const city = geocodingResult[0].name
    const country = geocodingResult[0].country
    return [city, country]
  } catch (err) {
    const errorMessage = getErrorMessage(err)
    console.warn(`Geocoding Reverse Error: ${errorMessage}`)

    return ['no city name', '🥺']
  }
}
