const IntcodeComputer = () => {
  let instructionPointer = 0
  let running = true
  let val1 = 0
  let val2 = 0
  return {

    runProgram: (program) => {
      if (!program) {
        throw new Error('Program contains no data.')
      }
      const workingSet = [...program]

      while (running) {
        switch (workingSet[instructionPointer]) {
          case 1:
            val1 = workingSet[workingSet[instructionPointer + 1]]
            val2 = workingSet[workingSet[instructionPointer + 2]]
            workingSet[instructionPointer + 3] = val1 + val2
            break
          case 99:
          default:
            running = false
            break
        }
        instructionPointer += 4
      }
      return workingSet
    }
  }
}

export default IntcodeComputer
