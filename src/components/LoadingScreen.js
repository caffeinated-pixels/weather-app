import React from 'react'

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <p>Fetching Weather Data ...</p>
      <div class="cloud-wrapper">
        <div class="cloud">
          <div class="sun"></div>
        </div>
      </div>
    </div>
  )
}
