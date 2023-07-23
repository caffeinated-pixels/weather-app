import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'

import { SEARCH_TEXT, UNITS } from '../../../constants/constants'
import { LocationResults } from '../../../types/openWeatherData'
import {
  FetchLocationResults,
  HandleResultsChoice,
  WeatherDataContext,
  WeatherDataContextType,
} from '../../../WeatherDataContext'
import { SearchResults } from '../SearchResults'
import { mockResultsArr } from './SearchResultsList.test'

const mockFetchLocationResults = jest.fn() as FetchLocationResults
const mockHandleResultsChoice = jest.fn() as HandleResultsChoice

const generateMockWeatherDataContext = (
  weatherContextProps?: Partial<WeatherDataContextType>,
  locationResultsProps?: Partial<LocationResults>
) => {
  const defaultMockLocationResults: LocationResults = {
    resultsArr: mockResultsArr,
    searchComplete: true,
    searchMatchFail: false,
    apiError: false,
    errorMsg: '',
  }

  const defaultMockWeatherDataContext: WeatherDataContextType = {
    weatherLocation: null,
    processedWeatherData: null,
    isLoading: false,
    isError: false,
    units: UNITS.METRIC,
    locationResults: { ...defaultMockLocationResults, ...locationResultsProps },
    fetchLocationResults: mockFetchLocationResults,
    handleResultsChoice: mockHandleResultsChoice,
    handleChangeUnits: jest.fn(),
    getWeatherLocation: jest.fn(),
    handleSearchSubmit: jest.fn(),
  }

  return { ...defaultMockWeatherDataContext, ...weatherContextProps }
}

const renderSearchResults = (
  locationResultsProps?: Partial<LocationResults>,
  weatherContextProps?: Partial<WeatherDataContextType>
) => {
  return render(
    <WeatherDataContext.Provider
      value={generateMockWeatherDataContext(
        weatherContextProps,
        locationResultsProps
      )}
    >
      <SearchResults />
    </WeatherDataContext.Provider>
  )
}

describe('SearchResults', () => {
  it('should match the snapshot', () => {
    const domTree = renderer
      .create(
        <WeatherDataContext.Provider value={generateMockWeatherDataContext()}>
          <SearchResults />
        </WeatherDataContext.Provider>
      )
      .toJSON()
    expect(domTree).toMatchSnapshot()
  })

  it('should render the matching results header', () => {
    renderSearchResults()

    expect(screen.getByText(SEARCH_TEXT.RESULTS_RETURNED)).toBeInTheDocument()
  })

  it('should render the close results button', () => {
    renderSearchResults()

    expect(
      screen.getByRole('button', { name: 'close search results' })
    ).toBeInTheDocument()
  })

  it('should call FetchLocationResults when close button clicked', async () => {
    renderSearchResults()

    await userEvent.click(
      screen.getByRole('button', { name: 'close search results' })
    )
    expect(mockFetchLocationResults).toHaveBeenCalled()
  })
  it('should display correct message if no results returned', () => {
    renderSearchResults({ resultsArr: [], searchMatchFail: true })
    expect(screen.getByText(SEARCH_TEXT.NO_SEARCH_RESULTS)).toBeInTheDocument()
  })

  it('should display correct message if there is an API error', () => {
    renderSearchResults({ resultsArr: [], apiError: true })
    expect(screen.getByText(SEARCH_TEXT.API_ERROR)).toBeInTheDocument()
  })

  it('calls handleResultsChoice when a result is clicked', async () => {
    renderSearchResults()

    await userEvent.click(screen.getByText('Brighton, Colorado, US'))

    expect(mockHandleResultsChoice).toHaveBeenCalled()
  })

  it('calls fetchLocationResults when clicking outside of search results', () => {
    renderSearchResults()

    userEvent.click(document.body)
  })
})
