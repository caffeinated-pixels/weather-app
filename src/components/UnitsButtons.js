import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function UnitsButtons() {
  const { handleChangeUnits } = useContext(WeatherDataContext)

  return (
    <>
      <button id="metric" onClick={handleChangeUnits}>
        Metric
      </button>
      <button id="imperial" onClick={handleChangeUnits}>
        Imperial
      </button>
    </>
  )
}
