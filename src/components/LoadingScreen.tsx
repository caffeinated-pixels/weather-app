export const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <p>Fetching Weather Data ...</p>
      <div className="cloud-wrapper">
        <div className="cloud">
          <div className="sun"></div>
        </div>
      </div>
    </div>
  )
}
