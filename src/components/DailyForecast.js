import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'
import generateIconInfo from '../helpers/generateIconInfo'

function createDailyComponents(dailyData) {
  // console.log(dailyData)

  const components = dailyData.map((daily, i) => {
    const backgroundColor = i % 2 === 0 ? 'daily-light' : 'daily-dark'

    const [iconUrl, iconAltText] = generateIconInfo(daily.weather[0], '2x')

    const date = new Date(daily.dt * 1000)
    const dateDisplay = date.toDateString().slice(0, -5)

    const minTemp = Math.round(daily.temp.min)
    const maxTemp = Math.round(daily.temp.max)

    return (
      <div key={`daily-${i}`} className={`daily-box ${backgroundColor}`}>
        <p className="daily-date">{dateDisplay}</p>
        <div className="daily-icon-wrapper">
          <img className="daily-icon" src={iconUrl} alt={iconAltText} />
        </div>

        <p className="daily-temp">
          {minTemp}°C / {maxTemp}°C
        </p>
      </div>
    )
  })

  return components
}

export default function DailyForecast() {
  const { weatherData } = useContext(WeatherDataContext)

  const dailyBoxes = createDailyComponents(weatherData.daily)

  return <section className="daily-forecast">{dailyBoxes}</section>
}
