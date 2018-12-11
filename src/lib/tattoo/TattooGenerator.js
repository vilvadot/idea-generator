const connectors = require('../../dictionaries/tattoo/connectors.json')
const styles = require('../../dictionaries/tattoo/styles.json')
const {getRandomItem, maybe} = require('../procedural')
const {cleanSpaces} = require('../text')
const Subject = require('./Subject')
const {CHANCES} = require('./config')

class TattooGenerator {
  constructor(){
    this.idea = ''
  }

  generateIdea() {
    this._reset()
    this._addSubject()
    maybe(() => this._addSubject(), CHANCES.extraSubject)
    maybe(() => this._addRandomStyle(), CHANCES.style)
    return cleanSpaces(this.idea)
  }

  _reset(){
    this.idea = ''
  }

  _addSubject(){
    const subject = new Subject
    const randomSubject = subject.getDescription()
    const isFirstSubject = !this.idea.length
    const connector = isFirstSubject 
      ? ''
      : getRandomItem(connectors) 
    this.idea = `${this.idea} ${connector} ${randomSubject}`
  }

  _addRandomStyle(){
    const randomStyle = getRandomItem(styles)
    this.idea = `${this.idea} in ${randomStyle} style`
  }  
}

module.exports = TattooGenerator;
