import React, { useContext, useEffect, useRef } from 'react'
import { WeatherDataContext } from '../WeatherDataContext'

export default function SearchResults() {
  const {
    locationResults,
    handleResultsChoice,
    fetchLocationResults
  } = useContext(WeatherDataContext)

  const { resultsArr, searchMatchFail, apiError } = locationResults

  const searchResultsRef = useRef(null)

  const searchResults = resultsArr.map((location, i) => {
    const backgroundColor = i % 2 === 0 ? 'stripe-light' : 'stripe-dark'

    return (
      <li
        key={`result${i}`}
        className={`search-result ${backgroundColor}`}
        onClick={() => handleResultsChoice(i)}
        onKeyDown={e => handleResultsChoice(i, e)}
        tabIndex="0"
      >
        {location.name}, {location.state && `${location.state}, `}
        {location.country}
      </li>
    )
  })

  const headerText = searchMatchFail
    ? 'No results!'
    : apiError
    ? 'API error! 🙄'
    : 'Matching results:'

  const closeResults = e => {
    console.log('focus lost')

    // checks if element is child of search-result-wrapper
    if (!e.currentTarget.contains(e.relatedTarget)) {
      // calling with no argument will clear results
      fetchLocationResults()
    }
  }

  // automatically set focus to new searchResults
  useEffect(() => searchResultsRef.current.focus(), [locationResults])

  return (
    <div
      id="search-results"
      className="search-result-wrapper"
      tabIndex="0"
      ref={searchResultsRef}
      onBlur={closeResults}
    >
      <div className="search-result-header">
        <p>{headerText}</p>
        <button
          className="icon-button"
          onClick={() => fetchLocationResults()}
          aria-label="close search results"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <ul className="search-result-list">{searchResults}</ul>
    </div>
  )
}
