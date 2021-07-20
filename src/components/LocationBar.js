import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function LocationBar() {
  const { locationData } = useContext(WeatherDataContext)
  console.log(locationData)

  return (
    <div className="locationbar">
      <i className="locationbar__icon fas fa-location-arrow"></i>
      <div className="locationbar__city">Toronto, CA</div>
      <i className="locationbar__icon fas fa-search-location"></i>
      <i className="locationbar__icon fas fa-caret-square-down"></i>
    </div>
  )
}
