const TattooGenerator = require('../lib/tattoo/TattooGenerator')

const generator = new TattooGenerator

exports.generateIdea = (req, res) => {
  res.json({
    idea: generator.generateIdea()
  })
}

exports.renderTattoo = (req, res) => {
  res.render('main', { 
    title: 'Tattoo', 
    idea: generator.generateIdea(),
    endpoint: 'tattoo',
    background: 'red'
    })
}
