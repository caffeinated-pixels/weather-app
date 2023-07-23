import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'

import { GeocodingApiResult } from '../../../types/openWeatherData'
import { SearchResultsList } from '../SearchResultsList'

export const mockResultsArr: GeocodingApiResult[] = [
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
  it('should match the snapshot', () => {
    const domTree = renderer
      .create(
        <SearchResultsList
          resultsArr={mockResultsArr}
          handleResultsChoice={mockHandleResultsChoice}
        />
      )
      .toJSON()
    expect(domTree).toMatchSnapshot()
  })

  it('should render the SearchResultsList component', () => {
    renderSearchResultsList()

    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('should render the correct number of results', () => {
    renderSearchResultsList()

    expect(screen.getAllByRole('listitem').length).toBe(5)
  })

  it('should render the correct text for each result', () => {
    renderSearchResultsList()

    const listItems = screen.getAllByRole('listitem')

    listItems.forEach((item, i) => {
      expect(item).toHaveTextContent(
        `${mockResultsArr[i].name}, ${
          mockResultsArr[i].state && `${mockResultsArr[i].state}, `
        }${mockResultsArr[i].country}`
      )
    })
  })

  it('should call handleResultsChoice when a result is clicked', async () => {
    renderSearchResultsList()

    const listItems = screen.getAllByRole('listitem')

    await userEvent.click(listItems[0])
    expect(mockHandleResultsChoice).toHaveBeenCalled()

    for (let i = 0; i < listItems.length; i++) {
      await userEvent.click(listItems[i])
      expect(mockHandleResultsChoice).toHaveBeenCalledWith(i)
    }
  })

  it('should call handleResultsChoice when a result is focused and enter is pressed', async () => {
    renderSearchResultsList()

    const listItems = screen.getAllByRole('listitem')

    for (let i = 0; i < listItems.length; i++) {
      listItems[i].focus()
      await userEvent.keyboard('{enter}')
      expect(mockHandleResultsChoice).toHaveBeenCalled()
    }
  })
})
