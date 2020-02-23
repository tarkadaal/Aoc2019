/* eslint-env jest */
import IntcodeComputer from '../intcodeComputer'

describe('IntcodeComputer', () => {
  test('can be created', () => {
    const sut = IntcodeComputer()
    expect(sut).toBeTruthy()
  })

  test('only accepts valid programs', () => {
    const sut = IntcodeComputer()
    expect(() => {
      sut.runProgram()
    }).toThrow()
  })

  test('runs simplest valid program', () => {
    const sut = IntcodeComputer()
    const result = sut.runProgram([99])
    expect(result).toEqual([99])
  })

  test('runs valid program', () => {
    const sut = IntcodeComputer()
    const result = sut.runProgram([1, 0, 0, 3, 99])
    expect(result).toEqual([1, 0, 0, 2, 99])
  })

  /*
    things to test:
        what if the parameters point outside the array
        what if we read a four byte frame, and we go out of bounds
  */
})
