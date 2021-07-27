import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function SearchBar() {
  const { locationName, getBrowserGeolocation } = useContext(WeatherDataContext)
  const { city, country } = locationName

  return (
    <>
      <i
        className="locationbar__icon fas fa-map-marker-alt"
        onClick={getBrowserGeolocation}
      ></i>
      <div className="locationbar__city">
        {city}, {country}
      </div>
      <i className="locationbar__icon fas fa-search-location"></i>
    </>
  )
}
