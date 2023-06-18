import { useContext, useRef, useEffect } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'
import SimpleBar from 'simplebar-react'

export const HourlyForecast = () => {
  const { processedWeatherData } = useContext(WeatherDataContext)
  const scrollableNodeRef = useRef<HTMLDivElement>(null)

  const { hourlyBoxes } = processedWeatherData

  // TODO: create a custom hook for this to reduce duplication
  useEffect(() => {
    if (scrollableNodeRef.current) scrollableNodeRef.current.tabIndex = 0
  }, [])

  return (
    <section className="hourly-forecast-ribbon">
      <SimpleBar scrollableNodeProps={{ ref: scrollableNodeRef }}>
        {hourlyBoxes}
      </SimpleBar>
    </section>
  )
}

/*
We're passing down the ref as props to access SimpleBar's underlying scrollable
div element (similar to using forwardRef I guess). This lets us set a tabIndex
on it (via useEffect).
*/
