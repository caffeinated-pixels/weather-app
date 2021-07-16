import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'
import { monthLookup } from '../helpers/timeLookup'

export default function HourlyForecast() {
  const { weatherData, isLoading } = useContext(WeatherDataContext)
  let hourlyBoxes

  if (isLoading) {
    hourlyBoxes = <p>still loading</p>
  } else {
    hourlyBoxes = weatherData.hourly.map((hourly, i) => {
      const backgroundColor = i % 2 === 0 ? 'hourly-light' : 'hourly-dark'
      const date = new Date(hourly.dt * 1000)
      const hour = date.getHours()

      // Display 'Now' for current hour, display date if midnight (i.e. new day), else display the actual hour in hh:00 format
      const hourDisplay =
        i === 0
          ? 'Now'
          : hour === 0
          ? `${monthLookup[date.getMonth()]} ${date.getDate()}`
          : `${hour}:00`

      // TODO: convert to location timezone; the time will be in the user's local time (so the location timezone may be different!!!)

      return (
        <div key={`hourly-${i}`} className={`hourly-box ${backgroundColor}`}>
          <p className="hourly-time">{hourDisplay}</p>
          <div className="hourly-icon-wrapper">
            <img
              className="hourly-icon"
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
            />
          </div>

          <p className="hourly-temp">{Math.round(hourly.temp)}°C</p>
        </div>
      )
    })
  }

  return <section className="hourly-forecast-ribbon">{hourlyBoxes}</section>
}
