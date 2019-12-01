import { readFile } from 'fs'
import { calculateFuelEx } from './Day1/fuelCalculator'

readFile('src/Day1/1.1.txt', 'utf8', function (err, contents) {
  if (err) console.log(err)
  const items = contents.split('\n').filter(x => !!x)
  const requirements = items.map(calculateFuelEx)
  const final = requirements.reduce((acc, x) => x + acc)
  console.log(final)
})

console.log('after calling readFile')
