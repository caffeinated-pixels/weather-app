import { forwardRef, ForwardedRef, ReactNode } from 'react'
import { CloseResults } from './SearchResults'
import { FetchLocationResults } from '../WeatherDataContext'

type SearchResultsContainerProps = {
  closeResults: CloseResults
  headerText: string
  fetchLocationResults: FetchLocationResults
  children: ReactNode
}

export const SearchResultsContainer = forwardRef(
  (
    {
      closeResults,
      headerText,
      fetchLocationResults,
      children,
    }: SearchResultsContainerProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        id="search-results"
        className="search-result-wrapper"
        tabIndex={0}
        ref={ref}
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
        {children}
      </div>
    )
  }
)
