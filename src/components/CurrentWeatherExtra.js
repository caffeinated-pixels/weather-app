import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function CurrentWeatherExtra() {
  const { weatherData } = useContext(WeatherDataContext)
  const { current, hourly } = weatherData

  const precipProb = hourly[0].pop * 100
  const humidity = current.humidity
  const dewPoint = Math.round(current.dew_point)
  const uvIndex = current.uvi.toFixed(1)
  const pressure = current.pressure
  const visibility = (current.visibility / 1000).toFixed(1)

  return (
    <div className="current-extra">
      <ul className="extra-list">
        <li className="extra-list-item">
          <span className="text-bold">precipitation:</span> {precipProb}%
        </li>
        <li className="extra-list-item">
          <span className="text-bold">humidity:</span> {humidity}%
        </li>
        <li className="extra-list-item">
          <span className="text-bold">dew point:</span> {dewPoint}°C
        </li>
        <li className="extra-list-item">
          <span className="text-bold">UV index:</span> {uvIndex}
        </li>
        <li className="extra-list-item">
          <span className="text-bold">pressure:</span> {pressure} hPa
        </li>
        <li className="extra-list-item">
          <span className="text-bold">visibility:</span> {visibility} km
        </li>
      </ul>
    </div>
  )
}
