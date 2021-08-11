const axios = require('axios')

exports.handler = async function(event, context) {
  const baseUrl = 'https://api.openweathermap.org/geo/1.0/direct'
  const apiKey = process.env.OPEN_WEATHER_KEY

  const { city } = event.queryStringParameters

  const fullUrl = `${baseUrl}?q=${city}&limit=5&appid=${apiKey}`

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
