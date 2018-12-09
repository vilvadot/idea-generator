const subjects = require('../dictionaries/tattoo/subjects.json')
const adjectives = require('../dictionaries/tattoo/adjectives.json')
const connectors = require('../dictionaries/tattoo/connectors.json')
const styles = require('../dictionaries/tattoo/styles.json')
const actions = require('../dictionaries/tattoo/actions.json')

// TODO: Refactor to class?

const pluralArticles = [
  'multiple',
  'several',
  'a couple',
  'two',
  'three',
  ''
]

const CHANCES = {
  action: .2,
  extraSubject: .5,
  plural:.05,
  style: .1,
}

const getStyle = () => {
  const style = getRandomItem(styles)

  return `in ${style} style`
}

const addPlural = (message) => {
  const chanceDefeated = rollSucceeds(CHANCES.plural)
  const lastLetter = message[message.length - 1]
  const suffix = lastLetter == 's' ? 'es' : 's'
  return chanceDefeated ? `${message}${suffix}` : message
}

const getRandomItem = (array) => {
  const randomId = Math.floor(Math.random() * array.length)
  return array[randomId]
}

const addArticle = word => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const cleanWord = word.trim()
  const isVowel = vowels.includes(cleanWord[0])
  const lastLetter = cleanWord[cleanWord.length - 1]
  const isPlural = lastLetter === 's'
  let article = isVowel ? 'an' : 'a'
  article = isPlural ? getRandomItem(pluralArticles) : article
  
  return `${article} ${word}`
}

const rollSucceeds = (chance) => {
  const randomNum = Math.random()
  return randomNum > (1 - chance)
}

const maybe = (content, chanceToAppear) => {
  const chanceDefeated = rollSucceeds(chanceToAppear)
  return chanceDefeated ? content : ''
}

const cleanSpaces = (string) => {
  return string.replace(/\s\s+/g, ' ')
}

const getExtraSubject = () => {
  const connector = getRandomItem(connectors)
  const subject = generateSubject()
  const action = maybe(getAction(), CHANCES.action)
  return `${connector} ${subject} ${action}`
}

const getAction = () => {
  const action = getRandomItem(actions)
  // const subject = generateSubject(.2)
  return `${action} `
}

const generateSubject = (adjectiveChance = .7) => {
  const subject = getRandomItem(subjects)
  const adjective = maybe(getRandomItem(adjectives), adjectiveChance)
  const idea = `${adjective} ${subject}`
  return addArticle(addPlural(idea))
}

const generateTattooIdea = () => {
  const mainSubject = generateSubject()
  const extraSubject = maybe(getExtraSubject(), CHANCES.extraSubject)
  const action = maybe(getAction(), CHANCES.action)
  const style = maybe(getStyle(), CHANCES.style)
  const idea =  `${mainSubject} ${extraSubject} ${action} ${style}`
  return cleanSpaces(idea)
}

exports.generateTattoo = (req, res) => {
  res.json({
    idea: generateTattooIdea()
  })
}

exports.renderTattoo = (req, res) => {
  res.render('main', { 
    title: 'Tattoo', 
    idea: generateTattooIdea() 
    })
}
