import React, { useContext, useState } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'
import SearchResults from './SearchResults'

export default function SearchBar() {
  const {
    weatherLocation,
    getWeatherLocation,
    handleSearchSubmit,
    locationResults
  } = useContext(WeatherDataContext)
  const { city, country, state } = weatherLocation
  const currentLocation = `${city}, ${state ? state + ', ' : ''}${country}`

  const [searchInput, setSearchInput] = useState(currentLocation)

  return (
    <>
      <button
        className="icon-button"
        onClick={() => getWeatherLocation()}
        aria-label="get weather for current location"
      >
        <i className="locationbar__icon fas fa-map-marker-alt"></i>
      </button>
      <form
        className="form-wrapper"
        onSubmit={e => handleSearchSubmit(e, searchInput)}
      >
        <i className="search-icon fas fa-search-location"></i>

        <input
          type="text"
          className="search-input"
          placeholder="search for a city"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          onFocus={() => setSearchInput('')}
          onBlur={() => setSearchInput(currentLocation)}
        />
      </form>
      {locationResults.searchComplete && <SearchResults />}
    </>
  )
}
