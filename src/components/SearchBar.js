import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function SearchBar() {
  const { locationData } = useContext(WeatherDataContext)

  return (
    <>
      <i className="fas fa-location-arrow"></i>
      <h2>{locationData}</h2>
      <i className="fas fa-search-location"></i>
    </>
  )
}
