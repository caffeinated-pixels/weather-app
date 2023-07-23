import { CurrentWeatherExtra } from './CurrentWeatherExtra'
import { CurrentWeatherMain } from './CurrentWeatherMain'

export const CurrentWeather = () => {
  return (
    <section className="current-weather">
      <CurrentWeatherMain />
      <CurrentWeatherExtra />
    </section>
  )
}
