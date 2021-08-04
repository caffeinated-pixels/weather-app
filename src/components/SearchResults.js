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
      <li
        key={`result${i}`}
        className={`search-result ${backgroundColor}`}
        onClick={() => handleResultsChoice(i)}
        tabIndex="0"
      >
        {location.name}, {location.state && `${location.state}, `}
        {location.country}
      </li>
    )
  })

  useEffect(() => {
    document.addEventListener('click', closeResults)

    return () => document.removeEventListener('click', closeResults)
  }, [closeResults])

  return (
    <div className="search-result-wrapper" tabIndex="0">
      <div className="search-result-header">
        <p>Matching results:</p>
        <button className="icon-button">
          <i className="fas fa-times"></i>
        </button>
      </div>
      <ul id="search-results" className="search-result-list">
        {searchResults}
      </ul>
    </div>
  )
}
