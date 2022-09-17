import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import App from './App'
import { WeatherDataContextProvider } from './WeatherDataContext'

const root = createRoot(document.getElementById('root'))
root.render(
  <WeatherDataContextProvider>
    <App />
  </WeatherDataContextProvider>
)
