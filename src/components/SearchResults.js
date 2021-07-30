import React, { useContext, useEffect, useCallback } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function SearchResults() {
  const {
    locationResults,
    handleResultsChoice,
    fetchLocationResults
  } = useContext(WeatherDataContext)

  const closeResults = useCallback(
    e => {
      console.log('close results')
      if (e.target.id !== 'search-results') {
        fetchLocationResults()
      }
    },
    [fetchLocationResults]
  )

  const searchResults = locationResults.map((location, i) => {
    const backgroundColor = i % 2 === 0 ? 'stripe-light' : 'stripe-dark'

    return (
      <div
        key={`result${i}`}
        className={`search-result ${backgroundColor}`}
        role="listitem"
        onClick={() => handleResultsChoice(i)}
      >
        <p>
          {location.name}, {location.state && `${location.state}, `}
          {location.country}
        </p>
      </div>
    )
  })

  useEffect(() => {
    document.addEventListener('click', closeResults)

    return () => document.removeEventListener('click', closeResults)
  }, [closeResults])

  return (
    <div id="search-results" className="search-result-wrapper" role="list">
      {searchResults}
    </div>
  )
}
