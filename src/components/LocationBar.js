import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function LocationBar() {
  const { locationData } = useContext(WeatherDataContext)

  return (
    <div className="locationbar">
      <i className="fas fa-location-arrow"></i>
      <div className="locationbar__city">{locationData}</div>
      <i className="fas fa-search-location"></i>
      <i class="fas fa-caret-square-down"></i>
    </div>
  )
}
