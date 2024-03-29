import { generateIconInfo } from '../helpers/generateIconInfo'
import { DailyData } from '../types/openWeatherData'
import { Units } from '../WeatherDataContext'
// TODO: separate logic from UI
export const ProcessedDailyData = (dailyData: DailyData[], units: Units) => {
  const tempUnits = units === 'metric' ? '°C' : '°F'

  return (
    <>
      {dailyData.map((daily, i: number) => {
        const backgroundColor = i % 2 === 0 ? 'stripe-light' : 'stripe-dark'

        const [iconUrl, iconAltText] = generateIconInfo(daily.weather[0], '2x')

        const date = new Date(daily.dt * 1000)
        const dateDisplay = date.toDateString().slice(0, -5)

        const minTemp = Math.round(daily.temp.min) + tempUnits
        const maxTemp = Math.round(daily.temp.max) + tempUnits

        return (
          <div key={`daily-${i}`} className={`daily-box ${backgroundColor}`}>
            <p className="daily-date">{dateDisplay}</p>
            <div className="daily-icon-wrapper">
              <img className="daily-icon" src={iconUrl} alt={iconAltText} />
            </div>

            <p className="daily-temp">
              {minTemp} / {maxTemp}
            </p>
          </div>
        )
      })}
    </>
  )
}
