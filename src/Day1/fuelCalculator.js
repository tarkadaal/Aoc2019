const calculateFuel = (mass) => {
  return Math.floor(mass / 3) - 2
}

const calculateFuelEx = (mass) => {
  const fuel = calculateFuel(mass)
  return fuel <= 0 ? 0 : fuel + calculateFuelEx(fuel)
}

export {
  calculateFuel,
  calculateFuelEx
}
