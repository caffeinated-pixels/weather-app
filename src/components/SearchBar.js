import React, { useContext, useState } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function SearchBar() {
  const {
    weatherLocation,
    getWeatherLocation,
    handleSearchSubmit,
    locationResults
  } = useContext(WeatherDataContext)
  const { city, country } = weatherLocation
  const [searchInput, setSearchInput] = useState(`${city}, ${country}`)
  // console.log(locationResults)

  let searchResults

  if (locationResults[0]) {
    console.log(locationResults)
    searchResults = locationResults.map((location, i) => {
      const backgroundColor = i % 2 === 0 ? 'stripe-light' : 'stripe-dark'

      return (
        <div
          key={`result${i}`}
          className={`search-result ${backgroundColor}`}
          role="listitem"
          onClick={() => console.log('result clicked')}
        >
          <p>
            {location.name}, {location.country}
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
        <button type="submit" className="icon-button">
          <i className="locationbar__icon fas fa-search-location"></i>
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="search for a city"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          onFocus={() => setSearchInput('')}
          onBlur={() => setSearchInput(`${city}, ${country}`)}
        />
        <div className="search-result-wrapper" role="list">
          {searchResults}
        </div>
      </form>
    </>
  )
}
