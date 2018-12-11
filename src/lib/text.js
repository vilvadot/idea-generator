const {getRandomItem, rollSucceeds} = require('./procedural')
const pluralArticles = require('../dictionaries/plurals.json')
 
const getArticle = word => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const cleanWord = word.trim()
  const isVowel = vowels.includes(cleanWord[0])
  const lastLetter = cleanWord[cleanWord.length - 1]
  
  const isPlural = lastLetter === 's'
  
  let article = isVowel ? 'an' : 'a'
  article = isPlural ? getRandomItem(pluralArticles) : article
  
  return `${article}`
}

// Todo: Change change to appear to a HOF
const addPluralIfNeeded = (message, chanceToAppear) => {
  const pluralAppears = rollSucceeds(chanceToAppear)
  const lastLetter = message[message.length - 1]
  const endsInS = lastLetter == 's'
  const endsInH = lastLetter == 'h'
  const isEdgeCase = endsInH || endsInS
  
  const suffix = isEdgeCase ? 'es' : 's'

  return pluralAppears ? `${message}${suffix}` : message
}

const cleanSpaces = (string) => {
  return string.replace(/\s\s+/g, ' ')
}

module.exports = {
  getArticle,
  addPluralIfNeeded,
  cleanSpaces
}