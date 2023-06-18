import React, { useContext, useRef, useEffect } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'
import SimpleBar from 'simplebar-react'

export const HourlyForecast = () => {
  const { processedWeatherData } = useContext(WeatherDataContext)
  const scrollableNodeRef = useRef(null)

  const { hourlyBoxes } = processedWeatherData

  useEffect(() => {
    scrollableNodeRef.current.tabIndex = '0'
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
