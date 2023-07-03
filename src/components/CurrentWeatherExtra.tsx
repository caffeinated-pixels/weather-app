import { useWeatherDataContext } from '../hooks'

export const CurrentWeatherExtra = () => {
  const { processedWeatherData } = useWeatherDataContext()

  const { visibility, precipProb, humidity, dewPoint, uvIndex, pressure } =
    processedWeatherData ?? {}

  return (
    <div className="current-extra">
      <ul className="extra-list">
        <li className="extra-list-item">
          <span className="text-bold">precipitation:</span> {precipProb}
        </li>
        <li className="extra-list-item">
          <span className="text-bold">humidity:</span> {humidity}
        </li>
        <li className="extra-list-item">
          <span className="text-bold">dew point:</span> {dewPoint}
        </li>
        <li className="extra-list-item">
          <span className="text-bold">UV index:</span> {uvIndex}
        </li>
        <li className="extra-list-item">
          <span className="text-bold">pressure:</span> {pressure}
        </li>
        <li className="extra-list-item">
          <span className="text-bold">visibility:</span> {visibility}
        </li>
      </ul>
    </div>
  )
}
