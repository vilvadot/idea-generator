const subjects = require('../dictionaries/subjects.json')
const adjectives = require('../dictionaries/adjectives.json')

const getRandomItem = (array) => {
  const randomId = Math.floor(Math.random() * array.length)
  return array[randomId]
}

const getContentOnChance = (content, chance) => {
  const randomNum = Math.random()
  const chanceDefeated = randomNum > chance
  
  return chanceDefeated ? content : ''
}

const generateIdea = () => {
  const subject = getRandomItem(subjects)
  const adjective = getContentOnChance(getRandomItem(adjectives), 0.2)

  return `a ${adjective} ${subject} `
}

console.log(generateIdea())

exports.generateTattoo = (req, res) => {
  res.json({
    idea: generateSubject()
  })
}

