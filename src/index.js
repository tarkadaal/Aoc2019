import { readFile } from 'fs'
import { calculateFuelRequirement } from './Day1/fuelCalculator'

readFile('src/Day1/1.1.txt', 'utf8', function (err, contents) {
  if (err) console.log(err)
  const items = contents.split('\n').filter(x => !!x)
  console.log(items.length)
  const requirements = items.map(calculateFuelRequirement)
  console.log(requirements.length)
  const final = requirements.reduce((acc, x) => x + acc)
  console.log(final)
})

console.log('after calling readFile')
