export const getWindDirection = (degrees: number) => {
  // Probably not necessary, but normalize degrees to 0-360
  const normalizedDegrees = degrees % 360

  // There are 16 intercardinal wind directions, 22.5deg apart (ie 360 / 16)
  const cardinalDivisor = 360 / 16

  const directions = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ]

  const index =
    normalizedDegrees === 16 // cover the case where normalizedDegrees is 360
      ? 0
      : Math.round(normalizedDegrees / cardinalDivisor)

  return directions[index]
}
