import { getWindDirection } from '../getWindDirection'

describe('getWindDirection', () => {
  it('should return NNE when passed 22.5', () => {
    expect(getWindDirection(22.5)).toBe('NNE')
  })

  it('should return NE when passed 45', () => {
    expect(getWindDirection(45)).toBe('NE')
  })

  it('should return ENE when passed 67.5', () => {
    expect(getWindDirection(67.5)).toBe('ENE')
  })

  it('should return E when passed 90', () => {
    expect(getWindDirection(90)).toBe('E')
  })

  it('should return ESE when passed 112.5', () => {
    expect(getWindDirection(112.5)).toBe('ESE')
  })

  it('should return SE when passed 135', () => {
    expect(getWindDirection(135)).toBe('SE')
  })

  it('should return SSE when passed 157.5', () => {
    expect(getWindDirection(157.5)).toBe('SSE')
  })

  it('should return S when passed 180', () => {
    expect(getWindDirection(180)).toBe('S')
  })

  it('should return SSW when passed 202.5', () => {
    expect(getWindDirection(202.5)).toBe('SSW')
  })

  it('should return SW when passed 225', () => {
    expect(getWindDirection(225)).toBe('SW')
  })

  it('should return WSW when passed 247.5', () => {
    expect(getWindDirection(247.5)).toBe('WSW')
  })

  it('should return W when passed 270', () => {
    expect(getWindDirection(270)).toBe('W')
  })

  it('should return WNW when passed 292.5', () => {
    expect(getWindDirection(292.5)).toBe('WNW')
  })

  it('should return NW when passed 315', () => {
    expect(getWindDirection(315)).toBe('NW')
  })

  it('should return NNW when passed 337.5', () => {
    expect(getWindDirection(337.5)).toBe('NNW')
  })

  it('should return N when passed 360', () => {
    expect(getWindDirection(360)).toBe('N')
  })
})
