import React from 'react'
import Header from './components/Header'
import LocationBar from './components/LocationBar'
import CurrentWeather from './components/CurrentWeather'

export default function App() {
  return (
    <>
      <Header />
      <LocationBar />
      <CurrentWeather />
    </>
  )
}
