const calculateFuelRequirement = (mass) => {
  return Math.floor(mass / 3) - 2
}

export {
  calculateFuelRequirement
}
