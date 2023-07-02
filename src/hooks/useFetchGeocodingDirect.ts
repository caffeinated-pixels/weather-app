import { useState, useCallback } from 'react'
import { getErrorMessage } from '../helpers/getErrorMessage'

const initialState: LocationResults = {
  resultsArr: [],
  searchComplete: false,
  searchMatchFail: false,
  apiError: false,
  errorMsg: '',
}

/* In 'direct' mode, we can query the Open Weather Geocoding API with a city
name. It will return an array of results (up to 5 using the limit param) */
export const useFetchGeocodingDirect = () => {
  const [locationResults, setLocationResults] = useState(initialState)

  const fetchLocationResults = useCallback(
    async (cityNameToQuery: string) => {
      if (!cityNameToQuery) {
        setLocationResults(initialState)
        return
        // if no argument provided, clear the results and return
      }

      /* instead of calling the API directly, we do it via a netlify
       (serverless) function; this lets us hide the API from the front-end */
      const netlifyFunctionCall = `/.netlify/functions/fetchLocationDirect?city=${cityNameToQuery}`

      try {
        const response = await fetch(netlifyFunctionCall)
        const geocodingApiResults: GeocodingApiResults[] = await response.json()

        if (geocodingApiResults.length > 0) {
          setLocationResults({
            ...initialState,
            resultsArr: geocodingApiResults,
            searchComplete: true,
          })
        } else {
          // if no matches returned for search query
          setLocationResults({
            ...initialState,
            searchComplete: true,
            searchMatchFail: true,
          })
        }
      } catch (err) {
        const errorMessage = getErrorMessage(err)
        console.warn(`Geocoding Reverse Error: ${errorMessage}`)

        setLocationResults({
          ...initialState,
          searchComplete: true,
          apiError: true,
          errorMsg: errorMessage,
        })
      }
    },
    [setLocationResults]
  )

  return { locationResults, fetchLocationResults }
}
