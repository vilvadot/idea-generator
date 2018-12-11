const {getRandomItem} = require('./procedural')
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

const addPlural = (word) => {
  const lastLetter = word[word.length - 1]
  const endsInS = lastLetter == 's'
  const isEdgeCase = endsInS
  
  const suffix = isEdgeCase ? 'es' : 's'

  return `${word}${suffix}`
}

const cleanSpaces = (string) => {
  return string.replace(/\s\s+/g, ' ')
}

module.exports = {
  getArticle,
  addPlural,
  cleanSpaces
}