import { render, screen } from '@testing-library/react'
import { SearchResultsList } from '../SearchResultsList'
import { GeocodingApiResult } from '../../../types/openWeatherData'
import '@testing-library/jest-dom'

const mockResultsArr: GeocodingApiResult[] = [
  {
    name: 'Brighton',
    local_names: {
      yi: 'ברייטאן',
      sw: 'Brighton',
    },
    lat: 50.8214626,
    lon: -0.1400561,
    country: 'GB',
    state: 'England',
  },
  {
    name: 'Brighton',
    local_names: { en: 'Brighton' },
    lat: 39.983721,
    lon: -104.8110775,
    country: 'US',
    state: 'Colorado',
  },
  {
    name: 'Brighton',
    lat: 49.542751,
    lon: -55.6406218,
    country: 'CA',
    state: 'Newfoundland and Labrador',
  },
  {
    name: 'Brighton',
    lat: 33.4342755,
    lon: -86.9472148,
    country: 'US',
    state: 'Alabama',
  },
  {
    name: 'Brighton',
    lat: 39.039773,
    lon: -90.1410023,
    country: 'US',
    state: 'Illinois',
  },
]

const mockHandleResultsChoice = jest.fn()
const renderSearchResultsList = () => {
  return render(
    <SearchResultsList
      resultsArr={mockResultsArr}
      handleResultsChoice={mockHandleResultsChoice}
    />
  )
}

describe('SearchResultsList', () => {
  it('should render the SearchResultsList component', () => {
    renderSearchResultsList()

    expect(screen.getByRole('list')).toBeInTheDocument()
  })
})
