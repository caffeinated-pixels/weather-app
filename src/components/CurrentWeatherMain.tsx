import { useWeatherDataContext } from '../hooks'

export const CurrentWeatherMain = () => {
  const { processedWeatherData } = useWeatherDataContext()

  const {
    iconUrl,
    iconAltText,
    weatherDescription,
    currentTemp,
    minTemp,
    maxTemp,
    feelsLikeTemp,
    windSpeed,
    windDirection,
    windIconRotation,
  } = processedWeatherData ?? {}

  return (
    <div className="current-main">
      <div className="main-top">
        <div className="main-weather-icon">
          {<img src={iconUrl} alt={iconAltText} />}
        </div>

        <div className="main-temp-summary">
          <p className="main-current-temp">{currentTemp}</p>
          <p className="main-minmax-temp">
            {minTemp} / {maxTemp}
          </p>
        </div>
      </div>

      <div className="main-bottom">
        <p className="main-description">{weatherDescription}</p>
        <p className="main-feels-like">feels like {feelsLikeTemp}</p>
        <p className="main-wind">
          <i
            className="wind-icon fas fa-arrow-up"
            style={{ transform: `rotate(${windIconRotation}deg)` }}
          ></i>
          {windSpeed} {windDirection}
        </p>
      </div>
    </div>
  )
}
