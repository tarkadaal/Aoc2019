/* eslint-env jest */
import { calculateFuelRequirement } from '../fuelCalculator'

describe('Fuel Requirement Calculator', () => {
  test('exists', () => {
    expect(() => {
      calculateFuelRequirement(10)
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
      const actual = calculateFuelRequirement(mass)
      expect(actual).toEqual(expected)
    })
})
