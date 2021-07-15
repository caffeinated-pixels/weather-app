import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function SearchBar() {
  const { locationData } = useContext(WeatherDataContext)

  return <h2>{locationData}</h2>
}
