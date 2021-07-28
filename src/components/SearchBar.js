import React, { useContext, useState } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function SearchBar() {
  const { browserGeolocation, getBrowserGeolocation } = useContext(
    WeatherDataContext
  )
  const { city, country } = browserGeolocation
  const [searchInput, setSearchInput] = useState(`${city}, ${country}`)

  const handleSubmit = e => {
    e.preventDefault()
    console.log('submit search input')
  }

  return (
    <>
      <i
        className="locationbar__icon fas fa-map-marker-alt"
        onClick={getBrowserGeolocation}
      ></i>
      <form onSubmit={handleSubmit}>
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
