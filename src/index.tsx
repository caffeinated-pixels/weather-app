import './styles/main.scss'

import { createRoot } from 'react-dom/client'

import { App } from './App'
import { WeatherDataContextProvider } from './WeatherDataContext'

const root = createRoot(document.getElementById('root') as HTMLDivElement)
root.render(
  <WeatherDataContextProvider>
    <App />
  </WeatherDataContextProvider>
)
