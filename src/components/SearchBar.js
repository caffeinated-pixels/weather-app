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

  // let searchResults
  //
  // if (locationResults.jsxElements) {
  //   console.log(locationResults.geocodingApiResults)
  // }

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
          {locationResults.jsxElements}
        </div>
      </form>
    </>
  )
}
