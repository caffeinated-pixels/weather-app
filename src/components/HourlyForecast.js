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

      return (
        <div key={`hourly-${i}`} className={`hourly-box ${backgroundColor}`}>
          <p className="hourly-time">{date.getHours() + i}:00</p>
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
