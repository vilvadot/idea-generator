const subjects = require('../dictionaries/tattoo/subjects.json')
const adjectives = require('../dictionaries/tattoo/adjectives.json')
const connectors = require('../dictionaries/tattoo/connectors.json')
const styles = require('../dictionaries/tattoo/styles.json')
const actions = require('../dictionaries/tattoo/actions.json')
const pluralArticles = require('../dictionaries/plurals.json')

class IdeaCreator {
  constructor(topicGenerator) {
    this.generator = topicGenerator;
  }

  generateIdea() {
    //TODO: Mejor pasar generator aquí y hacerlo static o dejarlo cómo está?
    return this.generator.getIdea();
  }
}

class TattooGenerator {
  static getIdea() {
    return "hey";
  }
}

const idea = new IdeaCreator(TattooGenerator);
console.log(idea.generateIdea());

module.exports = TattooGenerator;
