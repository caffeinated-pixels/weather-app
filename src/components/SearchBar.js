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
      <i
        className="locationbar__icon fas fa-map-marker-alt"
        onClick={getWeatherLocation}
      ></i>
      <form onSubmit={e => handleSearchSubmit(e, searchInput)}>
        <input
          type="text"
          className="locationbar__city"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
      </form>
      <i className="locationbar__icon fas fa-search-location"></i>
    </>
  )
}
