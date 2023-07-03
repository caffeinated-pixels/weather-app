import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  ChangeEvent,
  KeyboardEvent,
} from 'react'
import {
  useGetWeatherLocation,
  useFetchWeatherData,
  useFetchGeocodingDirect,
} from './hooks/'

// const WeatherDataContext = createContext<WeatherDataContext>({
//   weatherLocation: {},
//   processedWeatherData: {},
//   isLoading: true,
//   isError: false,
//   units: 'metric',
//   locationResults: {},
//   handleChangeUnits: () => {},
//   getWeatherLocation: () => {},
//   handleSearchSubmit: () => {},
//   handleResultsChoice: () => {},
//   fetchLocationResults: () => {},
// })

// TODO: replace any with proper types
const WeatherDataContext = createContext<any>(null)

function WeatherDataContextProvider({ children }: { children: ReactNode }) {
  const [units, setUnits] = useState('metric')
  const { weatherLocation, getWeatherLocation } = useGetWeatherLocation()
  const { locationResults, fetchLocationResults } = useFetchGeocodingDirect()

  const {
    weatherData: { processedWeatherData, isLoading, isError },
    fetchWeatherData,
  } = useFetchWeatherData()

  const handleChangeUnits = (event: ChangeEvent<HTMLButtonElement>) => {
    setUnits(event.target.id)
  }

  const handleSearchSubmit = (
    e: ChangeEvent<HTMLInputElement>,
    searchInput: string
  ) => {
    e.preventDefault()
    fetchLocationResults(searchInput)
  }

  const handleResultsChoice = (index: number, e: KeyboardEvent) => {
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
