const subjects = require('../../dictionaries/tattoo/subjects.json')
const adjectives = require('../../dictionaries/tattoo/adjectives.json')
const actions = require('../../dictionaries/tattoo/actions.json')
const {getRandomItem, maybe, rollSucceeds} = require('../procedural')
const {getArticle, addPlural} = require('../text')
const {CHANCES} = require('./config')

class Subject{
  constructor(){
    this.action = ''
    this.noun = ''
    this.isMultipleThings = rollSucceeds(CHANCES.plural)
    this._generate()
  }

  _generate(){
    this._generateNoun()
    maybe(() => this._generateAction(), CHANCES.action)
  }

  _generateAction(){
    const randomAction = getRandomItem(actions)
    this.action = randomAction
  }

  _generateNoun(){
    const noun = getRandomItem(subjects)
    let randomNoun = noun
    if(this.isMultipleThings){
      randomNoun = addPlural(noun)
    }
    const article = getArticle(randomNoun)

    this.noun = `${article} ${randomNoun}`
  }

  getDescription(){
    return `${this.noun} ${this.action}`
  }
}

module.exports = Subject