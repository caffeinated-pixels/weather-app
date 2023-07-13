import { useEffect, useRef, FocusEvent } from 'react'
import { useWeatherDataContext } from '../hooks'
import { SearchResultsList } from './SearchResultsList'
import { SearchResultsContainer } from './SearchResultsContainer'

export type CloseResults = (e: FocusEvent<HTMLDivElement>) => void

export const SearchResults = () => {
  const { locationResults, handleResultsChoice, fetchLocationResults } =
    useWeatherDataContext()

  const { resultsArr, searchMatchFail, apiError } = locationResults

  const searchResultsRef = useRef<HTMLDivElement>(null)

  const headerText = searchMatchFail
    ? 'No results!'
    : apiError
    ? 'API error! 🙄'
    : 'Matching results:'

  const closeResults: CloseResults = (e) => {
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
    <SearchResultsContainer
      closeResults={closeResults}
      headerText={headerText}
      fetchLocationResults={fetchLocationResults}
      ref={searchResultsRef}
    >
      <SearchResultsList
        resultsArr={resultsArr}
        handleResultsChoice={handleResultsChoice}
      />
    </SearchResultsContainer>
  )
}
