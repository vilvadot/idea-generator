describe("Idea generator", () => {

  beforeEach(()=>{
    cy.visit("http://localhost:7777/")
  })

  it("shows an idea on page load", () => {
    cy.get('#idea').then($idea => {
      const IDEA = $idea.text()

      expect(IDEA).to.not.have.length(0)
    })
  });

  it("generates a new idea on button click", () => {
    let IDEA
    let IDEA2

    cy.get('#idea').then($idea => {
      IDEA = $idea.text()
      cy.get('#generate__button').click()
    })

    cy.get('#idea').then($idea2 => {
      IDEA2 = $idea2.text()
      expect(IDEA).to.not.equal(IDEA2)
    })
  });
});