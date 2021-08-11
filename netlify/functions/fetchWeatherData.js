const axios = require('axios')

exports.handler = async function(event, context) {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall'
  const apiKey = process.env.OPEN_WEATHER_KEY

  const { lat, lon, units } = event.queryStringParameters

  const fullUrl = `${baseUrl}?lat=${lat}&lon=${lon}&units=${units}&APPID=${apiKey}`

  try {
    const response = await axios.get(fullUrl)
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (err) {
    return {
      statusCode: err.response.status,
      body: err.toString()
    }
  }
}
