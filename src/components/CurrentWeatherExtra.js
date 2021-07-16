import React from 'react'

export default function CurrentWeatherExtra() {
  return (
    <div className="current-extra">
      <ul className="extra-list">
        <li className="extra-list-item">
          <span className="text-bold">humidity:</span> 77%
        </li>
        <li className="extra-list-item">
          <span className="text-bold">dew point:</span> 21°C
        </li>
        <li className="extra-list-item">
          <span className="text-bold">UV index:</span> 6.3
        </li>
        <li className="extra-list-item">
          <span className="text-bold">pressure:</span> 1018hPa
        </li>
        <li className="extra-list-item">
          <span className="text-bold">visibility:</span> 10.0km
        </li>
      </ul>
    </div>
  )
}
