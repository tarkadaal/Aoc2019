/* eslint-env jest */
import { calculateFuel, calculateFuelEx } from '../fuelCalculator'

describe('Fuel Requirement Calculator', () => {
  test('exists', () => {
    expect(() => {
      calculateFuel(10)
    }).not.toThrow()
  })
  test.each([
    [{ mass: 12, expected: 2 }],
    [{ mass: 14, expected: 2 }],
    [{ mass: 1969, expected: 654 }],
    [{ mass: 100756, expected: 33583 }]
  ])(
    'Testing with mass: %p',
    ({ mass, expected }) => {
      const actual = calculateFuel(mass)
      expect(actual).toEqual(expected)
    })

  test.each([
    [{ mass: 12, expected: 2 }],
    [{ mass: 14, expected: 2 }],
    [{ mass: 1969, expected: 966 }],
    [{ mass: 100756, expected: 50346 }]
  ])(
    'Testing with mass: %p',
    ({ mass, expected }) => {
      const actual = calculateFuelEx(mass)
      expect(actual).toEqual(expected)
    })
})
