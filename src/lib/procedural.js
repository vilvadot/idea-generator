// Proc
const getRandomItem = (array) => {
  const randomId = Math.floor(Math.random() * array.length)
  return array[randomId]
}

const rollSucceeds = (chance = .5) => {
  const diceRoll = Math.random()
  const succes = diceRoll > (1 - chance)
  return succes
}

const maybe = (fun, chanceToAppear) => {
  const functionCalled = rollSucceeds(chanceToAppear)
  if(functionCalled) return fun()
}

module.exports = {
  maybe,
  getRandomItem,
  rollSucceeds,
}