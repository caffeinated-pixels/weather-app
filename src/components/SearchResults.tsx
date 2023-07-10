import { useEffect, useRef, FocusEvent } from 'react'
import { useWeatherDataContext } from '../hooks'
import { GeocodingApiResult } from '../types/openWeatherData'

export const SearchResults = () => {
  const { locationResults, handleResultsChoice, fetchLocationResults } =
    useWeatherDataContext()

  const { resultsArr, searchMatchFail, apiError } = locationResults

  const searchResultsRef = useRef<HTMLDivElement>(null)

  const searchResults = resultsArr.map(
    (location: GeocodingApiResult, i: number) => {
      const backgroundColor = i % 2 === 0 ? 'stripe-light' : 'stripe-dark'

      return (
        // TODO: fix key prop warning
        <li
          key={`result${i}`}
          className={`search-result ${backgroundColor}`}
          onClick={() => handleResultsChoice(i)}
          onKeyDown={(e) => handleResultsChoice(i, e)}
          tabIndex={0}
        >
          {location.name}, {location.state && `${location.state}, `}
          {location.country}
        </li>
      )
    }
  )

  const headerText = searchMatchFail
    ? 'No results!'
    : apiError
    ? 'API error! 🙄'
    : 'Matching results:'

  const closeResults = (e: FocusEvent<HTMLDivElement>) => {
    // checks if element is child of search-result-wrapper
    if (!e.currentTarget.contains(e.relatedTarget)) {
      // calling with no argument will clear results
      fetchLocationResults()
    }
  }

  // automatically set focus to new searchResults
  useEffect(() => {
    if (searchResultsRef.current) searchResultsRef.current.focus()
  }, [locationResults])

  return (
    <div
      id="search-results"
      className="search-result-wrapper"
      tabIndex={0}
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
