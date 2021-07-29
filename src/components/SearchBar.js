import React, { useContext, useState } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function SearchBar() {
  const {
    weatherLocation,
    getWeatherLocation,
    handleSearchSubmit,
    locationResults,
    handleResultsChoice
  } = useContext(WeatherDataContext)
  const { city, country, state } = weatherLocation
  const currentLocation = `${city}, ${state ? state + ', ' : ''}${country}`
  const [searchInput, setSearchInput] = useState(currentLocation)
  // console.log(locationResults)

  let searchResults

  if (locationResults[0]) {
    // console.log(locationResults)
    searchResults = locationResults.map((location, i) => {
      const backgroundColor = i % 2 === 0 ? 'stripe-light' : 'stripe-dark'

      return (
        <div
          key={`result${i}`}
          className={`search-result ${backgroundColor}`}
          role="listitem"
          onClick={() => handleResultsChoice(i)}
        >
          <p>
            {location.name}, {location.state && `${location.state}, `}
            {location.country}
          </p>
        </div>
      )
    })
  }

  return (
    <>
      <button className="icon-button" onClick={() => getWeatherLocation()}>
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
        <div className="search-result-wrapper" role="list">
          {searchResults}
        </div>
      </form>
    </>
  )
}
