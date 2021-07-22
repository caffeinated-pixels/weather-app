import React, { useContext, useState } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function LocationBar() {
  const [menuOpen, setIsMenuOpen] = useState(false)
  const { locationName, handleChangeUnits } = useContext(WeatherDataContext)
  const { city, country } = locationName

  console.log('location bar render')

  const handleMenuBtnClick = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  if (!menuOpen) {
    return (
      <div className="locationbar">
        <i className="locationbar__icon fas fa-location-arrow"></i>
        <div className="locationbar__city">
          {city}, {country}
        </div>
        <i className="locationbar__icon fas fa-search-location"></i>
        <i
          className="locationbar__icon fas fa-caret-square-down"
          onClick={handleMenuBtnClick}
        ></i>
      </div>
    )
  } else {
    return (
      <div className="locationbar">
        <button id="metric" onClick={handleChangeUnits}>
          Metric
        </button>
        <button id="imperial" onClick={handleChangeUnits}>
          Imperial
        </button>
        <i
          className="locationbar__icon fas fa-caret-square-down"
          onClick={handleMenuBtnClick}
        ></i>
      </div>
    )
  }
}
