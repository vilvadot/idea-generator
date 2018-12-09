const subjects = require('../dictionaries/subjects.json')
const adjectives = require('../dictionaries/adjectives.json')
const connectors = require('../dictionaries/connectors.json')
const styles = require('../dictionaries/styles.json')

// TODO: Add actions. A samurai leaping in the air
// TODO: Add style. A japanese style, samurai leaping in the air
// TODO: Add color/bn. A japanese style, samurai leaping in the air in grey and black.

const getStyle = () => {
  const style = getRandomItem(styles)

  return `in ${style} style`
}

const getRandomItem = (array) => {
  const randomId = Math.floor(Math.random() * array.length)
  return array[randomId]
}

const addArticle = word => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'h']
  const cleanWord = word.trim()
  const isVowel = vowels.includes(cleanWord[0])
  const isPlural = cleanWord[cleanWord.length] === 's'

  let article = isVowel ? 'an' : 'a'
  article = isPlural ? '' : article
  
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
  const subject = generateSubject(.2)
  return `${connector} ${subject}`
}

const generateSubject = (adjectiveChance = .7) => {
  const subject = getRandomItem(subjects)
  const adjective = `${maybe(getRandomItem(adjectives), adjectiveChance)} `
  const idea = `${adjective}${subject} `
  return addArticle(idea)
}

const generateTattooIdea = () => {
  const mainSubject = generateSubject()
  const extraSubject = maybe(getExtraSubject(), .2)
  const style = maybe(getStyle(), .2)
  const idea =  `${mainSubject}${extraSubject}${style}`
  return cleanSpaces(idea)
}


for(i of Array(10)){
  console.log(generateTattooIdea())
}

exports.generateTattoo = (req, res) => {
  res.json({
    idea: generateSubject()
  })
}

