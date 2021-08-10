const axios = require('axios')

exports.handler = async function(event, context) {
  console.log(event)
  console.log(context)

  const baseUrl = 'https://api.openweathermap.org/geo/1.0/reverse'
  const apiKey = process.env.OPEN_WEATHER_KEY

  const { lat, lon } = event.queryStringParameters

  const fullUrl = `${baseUrl}?lat=${lat}&lon=${lon}&APPID=${apiKey}`

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
