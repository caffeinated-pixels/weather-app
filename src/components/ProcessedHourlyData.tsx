import { monthLookup } from '../helpers/timeLookup'
import { generateIconInfo } from '../helpers/generateIconInfo'

// TODO: separate logic from UI
export const ProcessedHourlyData = (
  hourlyData: HourlyData[],
  units: string
) => {
  const tempUnits = units === 'metric' ? '°C' : '°F'

  return (
    <>
      {hourlyData.map((hourly, i) => {
        const backgroundColor = i % 2 === 0 ? 'stripe-light' : 'stripe-dark'
        const [iconUrl, iconAltText] = generateIconInfo(hourly.weather[0], '2x')
        const precipProb = (hourly.pop * 100).toFixed(0) + '%'
        const hourlyTemp = Math.round(hourly.temp) + tempUnits

        const date = new Date(hourly.dt * 1000)
        const hour = date.getHours()

        // Display 'Now' for current hour. Display date if midnight (i.e. new day), else display the actual hour in hh:00 format
        const hourDisplay =
          i === 0
            ? 'Now'
            : hour === 0
            ? `${monthLookup[date.getMonth()]} ${date.getDate()}`
            : `${hour}:00`

        const timeClass = hour === 0 ? 'hourly-time new-day' : 'hourly-time'

        // TODO: convert to location timezone; the time will be in the user's local time (so the location timezone may be different!!!)

        return (
          // TODO: fix key prop warning
          <div key={`hourly-${i}`} className={`hourly-box ${backgroundColor}`}>
            <p className={timeClass}>{hourDisplay}</p>
            <div className="hourly-icon-wrapper">
              <img className="hourly-icon" src={iconUrl} alt={iconAltText} />
            </div>
            <p className="precip-prob">{precipProb}</p>
            <p className="hourly-temp">{hourlyTemp}</p>
          </div>
        )
      })}
    </>
  )
}
