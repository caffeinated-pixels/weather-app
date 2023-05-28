import { generateIconInfo } from './generateIconInfo'
import { getWindDirection } from './getWindDirection'
import { calcWindIconRotation } from './calcWindIconRotation'
import { processHourlyData } from './processHourlyData'
import { processDailyData } from './processDailyData'

// TODO: generate types for weatherData
export const processWeatherData = (weatherData, units: string) => {
  console.log('🚀 turbo ~ processWeatherData ~ weatherData:', weatherData)
  const { current, daily, hourly } = weatherData

  // ICON & DESCRIPTION
  const [iconUrl, iconAltText] = generateIconInfo(current.weather[0], '4x')
  const weatherDescription = current.weather[0].description

  // TEMPERATURES
  const tempUnit = units === 'metric' ? '°C' : '°F'
  const currentTemp = Math.round(current.temp) + tempUnit
  const minTemp = Math.round(daily[0].temp.min) + tempUnit
  const maxTemp = Math.round(daily[0].temp.max) + tempUnit
  const feelsLikeTemp = Math.round(current.feels_like) + tempUnit

  // WIND INFO
  const windSpeed =
    units === 'metric'
      ? (current.wind_speed * 3.6).toFixed(1) + 'km/h'
      : current.wind_speed + ' mph'
  /* for metric, API returns m/s - so we convert to km/h (m/s * 3.6)
      for imperial, API returns mph - so no conversion necessary */

  const windDirection = getWindDirection(current.wind_deg)
  const windIconRotation = calcWindIconRotation(current.wind_deg)

  // VISIBILITY
  const visibility =
    units === 'metric'
      ? (current.visibility / 1000).toFixed(1) + 'km'
      : (current.visibility * 0.00062137).toFixed(1) + 'mi'
  /* API always returns metres regardless of unit param
        for metric, convert to km (m / 1000)
        for imperial, convert to mi (m * 0.00062137)
      */

  // OTHER WEATHER DATA VALUES
  const precipProb = (hourly[0].pop * 100).toFixed(0) + '%'
  const humidity = current.humidity + '%'
  const dewPoint = Math.round(current.dew_point) + tempUnit
  const uvIndex = current.uvi.toFixed(1)
  const pressure = current.pressure + 'hPa'

  // PROCESS HOULRY DATA INTO ARRAY OF JSX ELEMENTS
  const hourlyBoxes = processHourlyData(hourly, units)
  const dailyBoxes = processDailyData(daily, units)

  return {
    iconUrl,
    iconAltText,
    weatherDescription,
    currentTemp,
    minTemp,
    maxTemp,
    feelsLikeTemp,
    windSpeed,
    windDirection,
    windIconRotation,
    visibility,
    precipProb,
    humidity,
    dewPoint,
    uvIndex,
    pressure,
    hourlyBoxes,
    dailyBoxes,
  }
}

const data = {
  lat: 43.6722,
  lon: -79.2913,
  timezone: 'America/Toronto',
  timezone_offset: -14400,
  current: {
    dt: 1685281007,
    sunrise: 1685266868,
    sunset: 1685321283,
    temp: 20.04,
    feels_like: 19.09,
    pressure: 1023,
    humidity: 38,
    dew_point: 5.3,
    uvi: 3.6,
    clouds: 0,
    visibility: 10000,
    wind_speed: 1.03,
    wind_deg: 0,
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
      },
    ],
  },
  minutely: [
    {
      dt: 1685281020,
      precipitation: 0,
    },
    {
      dt: 1685281080,
      precipitation: 0,
    },
    {
      dt: 1685281140,
      precipitation: 0,
    },
    {
      dt: 1685281200,
      precipitation: 0,
    },
    {
      dt: 1685281260,
      precipitation: 0,
    },
    {
      dt: 1685281320,
      precipitation: 0,
    },
    {
      dt: 1685281380,
      precipitation: 0,
    },
    {
      dt: 1685281440,
      precipitation: 0,
    },
    {
      dt: 1685281500,
      precipitation: 0,
    },
    {
      dt: 1685281560,
      precipitation: 0,
    },
    {
      dt: 1685281620,
      precipitation: 0,
    },
    {
      dt: 1685281680,
      precipitation: 0,
    },
    {
      dt: 1685281740,
      precipitation: 0,
    },
    {
      dt: 1685281800,
      precipitation: 0,
    },
    {
      dt: 1685281860,
      precipitation: 0,
    },
    {
      dt: 1685281920,
      precipitation: 0,
    },
    {
      dt: 1685281980,
      precipitation: 0,
    },
    {
      dt: 1685282040,
      precipitation: 0,
    },
    {
      dt: 1685282100,
      precipitation: 0,
    },
    {
      dt: 1685282160,
      precipitation: 0,
    },
    {
      dt: 1685282220,
      precipitation: 0,
    },
    {
      dt: 1685282280,
      precipitation: 0,
    },
    {
      dt: 1685282340,
      precipitation: 0,
    },
    {
      dt: 1685282400,
      precipitation: 0,
    },
    {
      dt: 1685282460,
      precipitation: 0,
    },
    {
      dt: 1685282520,
      precipitation: 0,
    },
    {
      dt: 1685282580,
      precipitation: 0,
    },
    {
      dt: 1685282640,
      precipitation: 0,
    },
    {
      dt: 1685282700,
      precipitation: 0,
    },
    {
      dt: 1685282760,
      precipitation: 0,
    },
    {
      dt: 1685282820,
      precipitation: 0,
    },
    {
      dt: 1685282880,
      precipitation: 0,
    },
    {
      dt: 1685282940,
      precipitation: 0,
    },
    {
      dt: 1685283000,
      precipitation: 0,
    },
    {
      dt: 1685283060,
      precipitation: 0,
    },
    {
      dt: 1685283120,
      precipitation: 0,
    },
    {
      dt: 1685283180,
      precipitation: 0,
    },
    {
      dt: 1685283240,
      precipitation: 0,
    },
    {
      dt: 1685283300,
      precipitation: 0,
    },
    {
      dt: 1685283360,
      precipitation: 0,
    },
    {
      dt: 1685283420,
      precipitation: 0,
    },
    {
      dt: 1685283480,
      precipitation: 0,
    },
    {
      dt: 1685283540,
      precipitation: 0,
    },
    {
      dt: 1685283600,
      precipitation: 0,
    },
    {
      dt: 1685283660,
      precipitation: 0,
    },
    {
      dt: 1685283720,
      precipitation: 0,
    },
    {
      dt: 1685283780,
      precipitation: 0,
    },
    {
      dt: 1685283840,
      precipitation: 0,
    },
    {
      dt: 1685283900,
      precipitation: 0,
    },
    {
      dt: 1685283960,
      precipitation: 0,
    },
    {
      dt: 1685284020,
      precipitation: 0,
    },
    {
      dt: 1685284080,
      precipitation: 0,
    },
    {
      dt: 1685284140,
      precipitation: 0,
    },
    {
      dt: 1685284200,
      precipitation: 0,
    },
    {
      dt: 1685284260,
      precipitation: 0,
    },
    {
      dt: 1685284320,
      precipitation: 0,
    },
    {
      dt: 1685284380,
      precipitation: 0,
    },
    {
      dt: 1685284440,
      precipitation: 0,
    },
    {
      dt: 1685284500,
      precipitation: 0,
    },
    {
      dt: 1685284560,
      precipitation: 0,
    },
    {
      dt: 1685284620,
      precipitation: 0,
    },
  ],
  hourly: [
    {
      dt: 1685278800,
      temp: 19.45,
      feels_like: 18.55,
      pressure: 1023,
      humidity: 42,
      dew_point: 6.22,
      uvi: 2.02,
      clouds: 19,
      visibility: 10000,
      wind_speed: 1.17,
      wind_deg: 17,
      wind_gust: 1.68,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685282400,
      temp: 20.04,
      feels_like: 19.09,
      pressure: 1023,
      humidity: 38,
      dew_point: 5.3,
      uvi: 3.6,
      clouds: 0,
      visibility: 10000,
      wind_speed: 0.66,
      wind_deg: 34,
      wind_gust: 1.45,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685286000,
      temp: 20.01,
      feels_like: 19.14,
      pressure: 1023,
      humidity: 41,
      dew_point: 6.37,
      uvi: 5.31,
      clouds: 12,
      visibility: 10000,
      wind_speed: 0.53,
      wind_deg: 115,
      wind_gust: 1.61,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685289600,
      temp: 20.38,
      feels_like: 19.6,
      pressure: 1022,
      humidity: 43,
      dew_point: 7.4,
      uvi: 6.7,
      clouds: 20,
      visibility: 10000,
      wind_speed: 0.9,
      wind_deg: 166,
      wind_gust: 2.06,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685293200,
      temp: 20.87,
      feels_like: 20.16,
      pressure: 1021,
      humidity: 44,
      dew_point: 8.18,
      uvi: 7.42,
      clouds: 25,
      visibility: 10000,
      wind_speed: 1.67,
      wind_deg: 180,
      wind_gust: 2.47,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685296800,
      temp: 21.46,
      feels_like: 20.81,
      pressure: 1021,
      humidity: 44,
      dew_point: 8.71,
      uvi: 7.24,
      clouds: 35,
      visibility: 10000,
      wind_speed: 1.45,
      wind_deg: 168,
      wind_gust: 2.58,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685300400,
      temp: 22.22,
      feels_like: 21.62,
      pressure: 1019,
      humidity: 43,
      dew_point: 7.73,
      uvi: 6.2,
      clouds: 69,
      visibility: 10000,
      wind_speed: 1.03,
      wind_deg: 167,
      wind_gust: 2.41,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685304000,
      temp: 22.68,
      feels_like: 22.02,
      pressure: 1018,
      humidity: 39,
      dew_point: 6.49,
      uvi: 4.61,
      clouds: 81,
      visibility: 10000,
      wind_speed: 0.18,
      wind_deg: 59,
      wind_gust: 2.15,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685307600,
      temp: 22.73,
      feels_like: 22.08,
      pressure: 1018,
      humidity: 39,
      dew_point: 6.27,
      uvi: 2.92,
      clouds: 63,
      visibility: 10000,
      wind_speed: 1.05,
      wind_deg: 357,
      wind_gust: 2.4,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685311200,
      temp: 22.24,
      feels_like: 21.59,
      pressure: 1017,
      humidity: 41,
      dew_point: 7.19,
      uvi: 1.48,
      clouds: 50,
      visibility: 10000,
      wind_speed: 1.43,
      wind_deg: 5,
      wind_gust: 2.77,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685314800,
      temp: 21.26,
      feels_like: 20.64,
      pressure: 1017,
      humidity: 46,
      dew_point: 8.44,
      uvi: 0.58,
      clouds: 41,
      visibility: 10000,
      wind_speed: 1.7,
      wind_deg: 351,
      wind_gust: 3.1,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685318400,
      temp: 20.11,
      feels_like: 19.48,
      pressure: 1018,
      humidity: 50,
      dew_point: 8.91,
      uvi: 0.15,
      clouds: 42,
      visibility: 10000,
      wind_speed: 1.52,
      wind_deg: 333,
      wind_gust: 3.52,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685322000,
      temp: 18.9,
      feels_like: 18.18,
      pressure: 1018,
      humidity: 51,
      dew_point: 8.45,
      uvi: 0,
      clouds: 10,
      visibility: 10000,
      wind_speed: 2.12,
      wind_deg: 320,
      wind_gust: 4.17,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685325600,
      temp: 18.22,
      feels_like: 17.4,
      pressure: 1018,
      humidity: 50,
      dew_point: 7.27,
      uvi: 0,
      clouds: 8,
      visibility: 10000,
      wind_speed: 2.77,
      wind_deg: 333,
      wind_gust: 5.23,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685329200,
      temp: 17.51,
      feels_like: 16.57,
      pressure: 1018,
      humidity: 48,
      dew_point: 6.04,
      uvi: 0,
      clouds: 9,
      visibility: 10000,
      wind_speed: 3.18,
      wind_deg: 341,
      wind_gust: 6.09,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685332800,
      temp: 16.85,
      feels_like: 15.82,
      pressure: 1018,
      humidity: 47,
      dew_point: 5.26,
      uvi: 0,
      clouds: 10,
      visibility: 10000,
      wind_speed: 3.08,
      wind_deg: 344,
      wind_gust: 6.66,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685336400,
      temp: 16.4,
      feels_like: 15.35,
      pressure: 1017,
      humidity: 48,
      dew_point: 5.09,
      uvi: 0,
      clouds: 11,
      visibility: 10000,
      wind_speed: 2.99,
      wind_deg: 346,
      wind_gust: 6.58,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685340000,
      temp: 16.08,
      feels_like: 15.13,
      pressure: 1017,
      humidity: 53,
      dew_point: 6.18,
      uvi: 0,
      clouds: 11,
      visibility: 10000,
      wind_speed: 3.23,
      wind_deg: 348,
      wind_gust: 6.61,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685343600,
      temp: 15.72,
      feels_like: 14.91,
      pressure: 1017,
      humidity: 60,
      dew_point: 7.97,
      uvi: 0,
      clouds: 14,
      visibility: 10000,
      wind_speed: 3.34,
      wind_deg: 360,
      wind_gust: 7.13,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685347200,
      temp: 15.44,
      feels_like: 14.84,
      pressure: 1017,
      humidity: 69,
      dew_point: 9.58,
      uvi: 0,
      clouds: 19,
      visibility: 10000,
      wind_speed: 3.1,
      wind_deg: 4,
      wind_gust: 6.43,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685350800,
      temp: 15.22,
      feels_like: 14.76,
      pressure: 1017,
      humidity: 75,
      dew_point: 10.72,
      uvi: 0,
      clouds: 15,
      visibility: 10000,
      wind_speed: 2.95,
      wind_deg: 17,
      wind_gust: 5.93,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685354400,
      temp: 14.85,
      feels_like: 14.45,
      pressure: 1018,
      humidity: 79,
      dew_point: 10.96,
      uvi: 0,
      clouds: 12,
      visibility: 10000,
      wind_speed: 2.76,
      wind_deg: 36,
      wind_gust: 5.25,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685358000,
      temp: 15.25,
      feels_like: 14.81,
      pressure: 1018,
      humidity: 76,
      dew_point: 10.95,
      uvi: 0.29,
      clouds: 9,
      visibility: 10000,
      wind_speed: 2.37,
      wind_deg: 50,
      wind_gust: 5.17,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685361600,
      temp: 16.39,
      feels_like: 15.94,
      pressure: 1019,
      humidity: 71,
      dew_point: 10.68,
      uvi: 0.94,
      clouds: 8,
      visibility: 10000,
      wind_speed: 3.44,
      wind_deg: 68,
      wind_gust: 7.28,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685365200,
      temp: 17.14,
      feels_like: 16.66,
      pressure: 1019,
      humidity: 67,
      dew_point: 10.54,
      uvi: 2.11,
      clouds: 0,
      visibility: 10000,
      wind_speed: 4.07,
      wind_deg: 72,
      wind_gust: 7.53,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685368800,
      temp: 17.77,
      feels_like: 17.25,
      pressure: 1019,
      humidity: 63,
      dew_point: 10.26,
      uvi: 3.76,
      clouds: 0,
      visibility: 10000,
      wind_speed: 4.35,
      wind_deg: 76,
      wind_gust: 7.38,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685372400,
      temp: 18.46,
      feels_like: 17.98,
      pressure: 1019,
      humidity: 62,
      dew_point: 10.41,
      uvi: 5.56,
      clouds: 2,
      visibility: 10000,
      wind_speed: 4.58,
      wind_deg: 85,
      wind_gust: 7.45,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685376000,
      temp: 18.89,
      feels_like: 18.45,
      pressure: 1019,
      humidity: 62,
      dew_point: 10.72,
      uvi: 7.08,
      clouds: 3,
      visibility: 10000,
      wind_speed: 4.41,
      wind_deg: 94,
      wind_gust: 6.86,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685379600,
      temp: 19.23,
      feels_like: 18.78,
      pressure: 1019,
      humidity: 60,
      dew_point: 10.67,
      uvi: 7.84,
      clouds: 4,
      visibility: 10000,
      wind_speed: 4.64,
      wind_deg: 102,
      wind_gust: 6.71,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685383200,
      temp: 19.24,
      feels_like: 18.76,
      pressure: 1019,
      humidity: 59,
      dew_point: 10.32,
      uvi: 7.65,
      clouds: 5,
      visibility: 10000,
      wind_speed: 4.76,
      wind_deg: 105,
      wind_gust: 6.75,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685386800,
      temp: 19.3,
      feels_like: 18.8,
      pressure: 1019,
      humidity: 58,
      dew_point: 10.03,
      uvi: 6.56,
      clouds: 8,
      visibility: 10000,
      wind_speed: 4.59,
      wind_deg: 108,
      wind_gust: 6.61,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685390400,
      temp: 19.13,
      feels_like: 18.56,
      pressure: 1018,
      humidity: 56,
      dew_point: 9.58,
      uvi: 4.88,
      clouds: 8,
      visibility: 10000,
      wind_speed: 4.37,
      wind_deg: 106,
      wind_gust: 6.71,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685394000,
      temp: 19.15,
      feels_like: 18.56,
      pressure: 1018,
      humidity: 55,
      dew_point: 9.36,
      uvi: 3.08,
      clouds: 8,
      visibility: 10000,
      wind_speed: 4.07,
      wind_deg: 101,
      wind_gust: 6.56,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685397600,
      temp: 18.9,
      feels_like: 18.28,
      pressure: 1018,
      humidity: 55,
      dew_point: 9.16,
      uvi: 1.61,
      clouds: 9,
      visibility: 10000,
      wind_speed: 3.75,
      wind_deg: 97,
      wind_gust: 6.52,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685401200,
      temp: 18.4,
      feels_like: 17.76,
      pressure: 1018,
      humidity: 56,
      dew_point: 9.06,
      uvi: 0.63,
      clouds: 10,
      visibility: 10000,
      wind_speed: 3.41,
      wind_deg: 91,
      wind_gust: 6.19,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685404800,
      temp: 17.6,
      feels_like: 16.93,
      pressure: 1018,
      humidity: 58,
      dew_point: 8.87,
      uvi: 0.16,
      clouds: 10,
      visibility: 10000,
      wind_speed: 3.04,
      wind_deg: 88,
      wind_gust: 5.54,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685408400,
      temp: 16.73,
      feels_like: 16.05,
      pressure: 1018,
      humidity: 61,
      dew_point: 8.8,
      uvi: 0,
      clouds: 9,
      visibility: 10000,
      wind_speed: 2.59,
      wind_deg: 72,
      wind_gust: 5.31,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685412000,
      temp: 16.3,
      feels_like: 15.6,
      pressure: 1019,
      humidity: 62,
      dew_point: 8.79,
      uvi: 0,
      clouds: 10,
      visibility: 10000,
      wind_speed: 2.7,
      wind_deg: 64,
      wind_gust: 5.35,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685415600,
      temp: 16,
      feels_like: 15.33,
      pressure: 1019,
      humidity: 64,
      dew_point: 8.85,
      uvi: 0,
      clouds: 11,
      visibility: 10000,
      wind_speed: 2.74,
      wind_deg: 62,
      wind_gust: 5.05,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685419200,
      temp: 15.63,
      feels_like: 14.97,
      pressure: 1019,
      humidity: 66,
      dew_point: 9.09,
      uvi: 0,
      clouds: 11,
      visibility: 10000,
      wind_speed: 2.91,
      wind_deg: 69,
      wind_gust: 6.72,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685422800,
      temp: 15.23,
      feels_like: 14.64,
      pressure: 1019,
      humidity: 70,
      dew_point: 9.44,
      uvi: 0,
      clouds: 11,
      visibility: 10000,
      wind_speed: 2.66,
      wind_deg: 79,
      wind_gust: 7.56,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685426400,
      temp: 14.68,
      feels_like: 14.14,
      pressure: 1019,
      humidity: 74,
      dew_point: 9.83,
      uvi: 0,
      clouds: 12,
      visibility: 10000,
      wind_speed: 2.12,
      wind_deg: 72,
      wind_gust: 5.54,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685430000,
      temp: 14.37,
      feels_like: 13.82,
      pressure: 1019,
      humidity: 75,
      dew_point: 9.8,
      uvi: 0,
      clouds: 10,
      visibility: 10000,
      wind_speed: 2.83,
      wind_deg: 59,
      wind_gust: 5.53,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685433600,
      temp: 14.17,
      feels_like: 13.57,
      pressure: 1019,
      humidity: 74,
      dew_point: 9.45,
      uvi: 0,
      clouds: 10,
      visibility: 10000,
      wind_speed: 3.09,
      wind_deg: 59,
      wind_gust: 5.28,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685437200,
      temp: 13.93,
      feels_like: 13.28,
      pressure: 1019,
      humidity: 73,
      dew_point: 9.02,
      uvi: 0,
      clouds: 10,
      visibility: 10000,
      wind_speed: 2.9,
      wind_deg: 69,
      wind_gust: 5.35,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685440800,
      temp: 13.8,
      feels_like: 13.12,
      pressure: 1020,
      humidity: 72,
      dew_point: 8.71,
      uvi: 0,
      clouds: 12,
      visibility: 10000,
      wind_speed: 2.82,
      wind_deg: 71,
      wind_gust: 5.75,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685444400,
      temp: 14.3,
      feels_like: 13.61,
      pressure: 1020,
      humidity: 70,
      dew_point: 8.66,
      uvi: 0.3,
      clouds: 11,
      visibility: 10000,
      wind_speed: 2.89,
      wind_deg: 74,
      wind_gust: 5.64,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1685448000,
      temp: 15.04,
      feels_like: 14.35,
      pressure: 1021,
      humidity: 67,
      dew_point: 8.7,
      uvi: 0.95,
      clouds: 11,
      visibility: 10000,
      wind_speed: 3,
      wind_deg: 80,
      wind_gust: 4.64,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      pop: 0,
    },
  ],
  daily: [
    {
      dt: 1685293200,
      sunrise: 1685266868,
      sunset: 1685321283,
      moonrise: 1685296320,
      moonset: 1685255940,
      moon_phase: 0.28,
      temp: {
        day: 20.87,
        min: 14.2,
        max: 22.73,
        night: 17.51,
        eve: 21.26,
        morn: 16.69,
      },
      feels_like: {
        day: 20.16,
        night: 16.57,
        eve: 20.64,
        morn: 15.85,
      },
      pressure: 1021,
      humidity: 44,
      dew_point: 8.18,
      wind_speed: 3.18,
      wind_deg: 341,
      wind_gust: 6.09,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: 25,
      pop: 0,
      uvi: 7.42,
    },
    {
      dt: 1685379600,
      sunrise: 1685353230,
      sunset: 1685407737,
      moonrise: 1685386500,
      moonset: 1685343480,
      moon_phase: 0.31,
      temp: {
        day: 19.23,
        min: 14.85,
        max: 19.3,
        night: 16,
        eve: 18.4,
        morn: 15.25,
      },
      feels_like: {
        day: 18.78,
        night: 15.33,
        eve: 17.76,
        morn: 14.81,
      },
      pressure: 1019,
      humidity: 60,
      dew_point: 10.67,
      wind_speed: 4.76,
      wind_deg: 105,
      wind_gust: 7.53,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: 4,
      pop: 0,
      uvi: 7.84,
    },
    {
      dt: 1685466000,
      sunrise: 1685439594,
      sunset: 1685494189,
      moonrise: 1685476860,
      moonset: 1685430960,
      moon_phase: 0.34,
      temp: {
        day: 19.39,
        min: 13.8,
        max: 20.92,
        night: 17.51,
        eve: 19.9,
        morn: 14.3,
      },
      feels_like: {
        day: 18.93,
        night: 17.25,
        eve: 19.64,
        morn: 13.61,
      },
      pressure: 1020,
      humidity: 59,
      dew_point: 10.39,
      wind_speed: 3.11,
      wind_deg: 85,
      wind_gust: 7.56,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: 15,
      pop: 0.01,
      uvi: 7.94,
    },
    {
      dt: 1685552400,
      sunrise: 1685525959,
      sunset: 1685580640,
      moonrise: 1685567340,
      moonset: 1685518500,
      moon_phase: 0.38,
      temp: {
        day: 24.06,
        min: 15.74,
        max: 24.63,
        night: 21.48,
        eve: 22.61,
        morn: 17.41,
      },
      feels_like: {
        day: 23.93,
        night: 21.35,
        eve: 22.52,
        morn: 17.3,
      },
      pressure: 1019,
      humidity: 54,
      dew_point: 13.53,
      wind_speed: 3.42,
      wind_deg: 168,
      wind_gust: 3.01,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: 0,
      pop: 0.07,
      uvi: 7.43,
    },
    {
      dt: 1685638800,
      sunrise: 1685612327,
      sunset: 1685667090,
      moonrise: 1685658060,
      moonset: 1685606160,
      moon_phase: 0.41,
      temp: {
        day: 25.33,
        min: 18.08,
        max: 25.6,
        night: 20.96,
        eve: 23.14,
        morn: 19.81,
      },
      feels_like: {
        day: 25.12,
        night: 20.86,
        eve: 22.92,
        morn: 19.65,
      },
      pressure: 1018,
      humidity: 46,
      dew_point: 12.03,
      wind_speed: 3.6,
      wind_deg: 185,
      wind_gust: 3.41,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: 26,
      pop: 0,
      uvi: 0.94,
    },
    {
      dt: 1685725200,
      sunrise: 1685698697,
      sunset: 1685753538,
      moonrise: 1685749080,
      moonset: 1685694000,
      moon_phase: 0.45,
      temp: {
        day: 20.28,
        min: 17.49,
        max: 21.16,
        night: 17.49,
        eve: 19.27,
        morn: 19.34,
      },
      feels_like: {
        day: 20.45,
        night: 17.72,
        eve: 19.6,
        morn: 19.11,
      },
      pressure: 1014,
      humidity: 80,
      dew_point: 16.28,
      wind_speed: 4.3,
      wind_deg: 283,
      wind_gust: 7.52,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 0.81,
      rain: 7.83,
      uvi: 1,
    },
    {
      dt: 1685811600,
      sunrise: 1685785069,
      sunset: 1685839985,
      moonrise: 1685840100,
      moonset: 1685782320,
      moon_phase: 0.5,
      temp: {
        day: 20.79,
        min: 15.34,
        max: 21.48,
        night: 17.06,
        eve: 20.07,
        morn: 15.7,
      },
      feels_like: {
        day: 19.94,
        night: 16.13,
        eve: 19.26,
        morn: 14.84,
      },
      pressure: 1014,
      humidity: 39,
      dew_point: 4.95,
      wind_speed: 5.32,
      wind_deg: 6,
      wind_gust: 10.68,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: 55,
      pop: 0.54,
      uvi: 1,
    },
    {
      dt: 1685898000,
      sunrise: 1685871443,
      sunset: 1685926431,
      moonrise: 1685931000,
      moonset: 1685871240,
      moon_phase: 0.52,
      temp: {
        day: 20.07,
        min: 13.54,
        max: 20.63,
        night: 16.02,
        eve: 18.85,
        morn: 14.66,
      },
      feels_like: {
        day: 19.07,
        night: 15.19,
        eve: 17.84,
        morn: 13.41,
      },
      pressure: 1013,
      humidity: 36,
      dew_point: 3.47,
      wind_speed: 3.68,
      wind_deg: 1,
      wind_gust: 7.63,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: 100,
      pop: 0,
      uvi: 1,
    },
  ],
}
