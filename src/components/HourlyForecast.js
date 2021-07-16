import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function HourlyForecast() {
  const { weatherData, isLoading } = useContext(WeatherDataContext)
  let hourlyBoxes

  const date = new Date()

  if (isLoading) {
    hourlyBoxes = <p>still loading</p>
  } else {
    hourlyBoxes = weatherData.hourly.map((hourly, i) => {
      const backgroundColor = i % 2 === 0 ? 'hourly-light' : 'hourly-dark'
      const date = new Date(hourly.dt * 1000)

      // TODO: convert to location timezone; the time will be in the user's local time (so the location timezone may be different!!!)
      const hour = i === 0 ? 'Now' : `${date.getHours()}:00`

      return (
        <div key={`hourly-${i}`} className={`hourly-box ${backgroundColor}`}>
          <p className="hourly-time">{hour}</p>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
          />
          <p className="hourly-temp">{Math.round(hourly.temp)}°C</p>
        </div>
      )
    })
  }

  // console.log(hourlyBoxes)

  return <section className="hourly-forecast-ribbon">{hourlyBoxes}</section>
}
