import { useContext, useRef, useEffect } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'
import SimpleBar from 'simplebar-react'

export const DailyForecast = () => {
  const { processedWeatherData } = useContext(WeatherDataContext)
  const scrollableNodeRef = useRef<HTMLDivElement>(null)

  const { dailyBoxes } = processedWeatherData

  useEffect(() => {
    if (scrollableNodeRef.current) scrollableNodeRef.current.tabIndex = 0
  }, [])

  return (
    <section className="daily-forecast">
      <SimpleBar
        style={{ height: '100%' }}
        scrollableNodeProps={{ ref: scrollableNodeRef }}
      >
        {dailyBoxes}
      </SimpleBar>
    </section>
  )
}

/*
We're passing down the ref as props to access SimpleBar's underlying scrollable
div element (similar to using forwardRef I guess). This lets us set a tabIndex
on it (via useEffect).
*/
