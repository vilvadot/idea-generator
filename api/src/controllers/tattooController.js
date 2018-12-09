const subjects = require('../dictionaries/subjects.json')
const adjectives = require('../dictionaries/adjectives.json')
const connectors = [
  'with',
  'covered with'
]


const getRandomItem = (array) => {
  const randomId = Math.floor(Math.random() * array.length)
  return array[randomId]
}

const addArticle = word => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const isVowel = vowels.includes(word[0])
  const article = isVowel ? 'an' : 'a'
  return `${article} ${word}`
}

const maybe = (content, chanceToAppear) => {
  const randomNum = Math.random()
  const chanceDefeated = randomNum > (1 - chanceToAppear)
  
  return chanceDefeated ? content : ''
}

const cleanSpaces = (string) => {
  return string.replace(/  /g, ' ')
}

const getExtraSubject = () => {
  const connector = getRandomItem(connectors)
  const subject = generateSubject()
  return `${connector} ${subject}`
}

const generateSubject = () => {
  const subject = getRandomItem(subjects)
  const adjective = `${maybe(getRandomItem(adjectives), .5)} `
  const idea = `${adjective}${subject} `
  return addArticle(idea)
}

const generateTattooIdea = () => {
  const mainSubject = generateSubject()
  const extraSubject = maybe(getExtraSubject(), .2)
  const idea =  `${mainSubject}${extraSubject}`
  return cleanSpaces(idea)
}

console.log(generateTattooIdea())

exports.generateTattoo = (req, res) => {
  res.json({
    idea: generateSubject()
  })
}

