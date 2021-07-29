export default function processlocationResults(locationResults) {
  return locationResults.map((location, i) => {
    const backgroundColor = i % 2 === 0 ? 'stripe-light' : 'stripe-dark'

    return (
      <div
        key={`result${i}`}
        className={`search-result ${backgroundColor}`}
        role="listitem"
        onClick={() => console.log('result clicked')}
      >
        <p>
          {location.name}, {location.country}
        </p>
      </div>
    )
  })
}
