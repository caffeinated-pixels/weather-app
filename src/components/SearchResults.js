import React, { useContext } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function SearchResults() {
  const { locationResults, handleResultsChoice } = useContext(
    WeatherDataContext
  )

  let searchResults

  if (locationResults[0]) {
    // console.log(locationResults)
    searchResults = locationResults.map((location, i) => {
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
  }

  return (
    <div className="search-result-wrapper" role="list">
      {searchResults}
    </div>
  )
}
