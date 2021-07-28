import React, { useContext, useState } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function SearchBar() {
  const {
    weatherLocation,
    getWeatherLocation,
    handleSearchSubmit
  } = useContext(WeatherDataContext)
  const { city, country } = weatherLocation
  const [searchInput, setSearchInput] = useState(`${city}, ${country}`)

  return (
    <>
      <button className="icon-button" onClick={() => getWeatherLocation()}>
        <i className="locationbar__icon fas fa-map-marker-alt"></i>
      </button>
      <form
        className="form-wrapper"
        onSubmit={e => handleSearchSubmit(e, searchInput)}
      >
        <input
          type="text"
          className="locationbar__city"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
      </form>
      <button className="icon-button">
        <i className="locationbar__icon fas fa-search-location"></i>
      </button>
    </>
  )
}
