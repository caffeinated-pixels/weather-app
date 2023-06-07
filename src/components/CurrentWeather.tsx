import { CurrentWeatherMain } from './CurrentWeatherMain'
import { CurrentWeatherExtra } from './CurrentWeatherExtra'

export const CurrentWeather = () => {
  return (
    <section className="current-weather">
      <CurrentWeatherMain />
      <CurrentWeatherExtra />
    </section>
  )
}
