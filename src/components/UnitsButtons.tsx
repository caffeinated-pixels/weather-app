import { useWeatherDataContext } from '../hooks'

export default function UnitsButtons() {
  const { units, handleChangeUnits } = useWeatherDataContext()

  const metricBtnClass =
    units === 'metric' ? 'units-button units-button-active' : 'units-button'

  const imperialBtnClass =
    units === 'imperial' ? 'units-button units-button-active' : 'units-button'

  return (
    <div className="units-button-wrapper">
      <button
        id="metric"
        className={metricBtnClass}
        onClick={handleChangeUnits}
      >
        Metric
      </button>
      <button
        id="imperial"
        className={imperialBtnClass}
        onClick={handleChangeUnits}
      >
        Imperial
      </button>
    </div>
  )
}
