import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import App from './App'
import { WeatherDataContextProvider } from './WeatherDataContext'

ReactDOM.render(
  <WeatherDataContextProvider>
    <App />
  </WeatherDataContextProvider>,
  document.getElementById('root')
)
