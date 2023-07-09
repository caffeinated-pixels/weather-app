import { calcWindIconRotation } from '../calcWindIconRotation'

describe('calcWindIconRotation', () => {
  it('should return 0 when passed 180', () => {
    expect(calcWindIconRotation(180)).toBe(0)
  })

  it('should return 90 when passed 270', () => {
    expect(calcWindIconRotation(270)).toBe(90)
  })

  it('should return 180 when passed 0', () => {
    expect(calcWindIconRotation(0)).toBe(180)
  })

  it('should return 270 when passed 90', () => {
    expect(calcWindIconRotation(90)).toBe(270)
  })

  it('should return 90 when passed 450', () => {
    expect(calcWindIconRotation(450)).toBe(270)
  })

  it('should return 180 when passed 360', () => {
    expect(calcWindIconRotation(360)).toBe(180)
  })
})
