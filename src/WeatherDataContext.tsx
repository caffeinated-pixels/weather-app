import { useEffect, useState, createContext, ReactNode } from 'react'
import {
  useGetWeatherLocation,
  useFetchWeatherData,
  useFetchGeocodingDirect,
} from './hooks/'
import {
  LocationData,
  LocationResults,
  ProcessedWeatherData,
} from './types/openWeatherData'

export type HandleChangeUnits = (
  event: React.MouseEvent<HTMLButtonElement>
) => void

export type HandleSearchSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  searchInput: string
) => void

export type HandleResultsChoice = (
  index: number,
  e?: React.KeyboardEvent
) => void

export type GetWeatherLocation = (selectedLocation?: LocationData) => void

export type FetchLocationResults = (cityNameToQuery?: string) => Promise<void>

export type WeatherDataContextType = {
  weatherLocation: LocationData | null
  processedWeatherData: ProcessedWeatherData | null
  isLoading: boolean
  isError: boolean
  units: string
  locationResults: LocationResults
  handleChangeUnits: HandleChangeUnits
  getWeatherLocation: GetWeatherLocation
  handleSearchSubmit: HandleSearchSubmit
  handleResultsChoice: HandleResultsChoice
  fetchLocationResults: FetchLocationResults
}

const WeatherDataContext = createContext<WeatherDataContextType | null>(null)

function WeatherDataContextProvider({ children }: { children: ReactNode }) {
  const [units, setUnits] = useState('metric')
  const { weatherLocation, getWeatherLocation } = useGetWeatherLocation()
  const { locationResults, fetchLocationResults } = useFetchGeocodingDirect()

  const {
    weatherData: { processedWeatherData, isLoading, isError },
    fetchWeatherData,
  } = useFetchWeatherData()

  const handleChangeUnits: HandleChangeUnits = (event) => {
    setUnits(event.currentTarget.id)
  }

  const handleSearchSubmit: HandleSearchSubmit = (e, searchInput) => {
    e.preventDefault()
    fetchLocationResults(searchInput)
  }

  const handleResultsChoice: HandleResultsChoice = (index, e) => {
    // check if called by onKeyDown (e is truthy); return if not Enter key
    if (e && e.key !== 'Enter') {
      return
    }

    const resultChoice = {
      city: locationResults.resultsArr[index].name,
      country: locationResults.resultsArr[index].country,
      state: locationResults.resultsArr[index].state,
      latitude: locationResults.resultsArr[index].lat,
      longitude: locationResults.resultsArr[index].lon,
    }

    getWeatherLocation(resultChoice)

    // call with no argument to clear results
    fetchLocationResults()
  }

  // after mounting, get user's coords from browser
  useEffect(() => {
    getWeatherLocation()
  }, [getWeatherLocation])

  /* once we have the user's coords, we can call the weather API
  we also need to re-call the API if units change */
  useEffect(() => {
    if (weatherLocation?.latitude) {
      fetchWeatherData(weatherLocation, units)
    }
  }, [units, weatherLocation, fetchWeatherData])

  return (
    <WeatherDataContext.Provider
      value={{
        weatherLocation,
        processedWeatherData,
        isLoading,
        isError,
        units,
        locationResults,
        handleChangeUnits,
        getWeatherLocation,
        handleSearchSubmit,
        handleResultsChoice,
        fetchLocationResults,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  )
}

export { WeatherDataContextProvider, WeatherDataContext }
