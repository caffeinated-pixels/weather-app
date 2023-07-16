import { render, screen, fireEvent } from '@testing-library/react'
import { SearchResultsContainer } from './SearchResultsContainer'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'

const closeResults = jest.fn()
const headerText = 'Search Results'
const fetchLocationResults = jest.fn()
const children = <div>Results</div>

const renderSearchResultsContainer = () => {
  return render(
    <SearchResultsContainer
      closeResults={closeResults}
      headerText={headerText}
      fetchLocationResults={fetchLocationResults}
    >
      {children}
    </SearchResultsContainer>
  )
}

describe('SearchResultsContainer', () => {
  it('should match the snapshot', () => {
    const domTree = renderer
      .create(
        <SearchResultsContainer
          closeResults={closeResults}
          headerText={headerText}
          fetchLocationResults={fetchLocationResults}
        >
          {children}
        </SearchResultsContainer>
      )
      .toJSON()
    expect(domTree).toMatchSnapshot()
  })

  it('renders the header text', () => {
    renderSearchResultsContainer()

    expect(screen.getByText(headerText)).toBeInTheDocument()
  })

  it('renders the children', () => {
    renderSearchResultsContainer()

    expect(screen.getByText('Results')).toBeInTheDocument()
  })

  it('calls the closeResults function when blurred', () => {
    renderSearchResultsContainer()

    fireEvent.blur(screen.getByRole('button'))

    expect(closeResults).toHaveBeenCalled()
  })

  it('calls the fetchLocationResults function when the close button is clicked', async () => {
    renderSearchResultsContainer()

    await userEvent.click(screen.getByLabelText('close search results'))

    expect(fetchLocationResults).toHaveBeenCalled()
  })
})
