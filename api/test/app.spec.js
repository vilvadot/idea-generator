const chai = require('chai')
const expect = chai.expect

const sum = (a,b) => a + b

describe('Sum', () => {
  it('should add two numbers', (done) => {
    const FIVE = 5
    const RESULT = sum(3, 2)
  
    expect(RESULT).to.equal(FIVE)
    done()
  })
})