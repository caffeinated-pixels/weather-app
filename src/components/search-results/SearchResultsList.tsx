import { HandleResultsChoice } from '../../WeatherDataContext'
import { GeocodingApiResult } from '../../types/openWeatherData'

type SearchResultsProps = {
  resultsArr: GeocodingApiResult[]
  handleResultsChoice: HandleResultsChoice
}

export const SearchResultsList = ({
  resultsArr,
  handleResultsChoice,
}: SearchResultsProps) => {
  return (
    <ul className="search-result-list">
      {resultsArr.map((location: GeocodingApiResult, i: number) => {
        const backgroundColor = i % 2 === 0 ? 'stripe-light' : 'stripe-dark'

        return (
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
      })}
    </ul>
  )
}
