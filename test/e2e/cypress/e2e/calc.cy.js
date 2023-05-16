describe('Calculator positive scenaior', () => {
  it('Addition', () => {
    cy.visit('http://localhost:3009')
    cy.get('#num1').type(6)
    cy.get('#num2').type(1)
    cy.get('#select').select("add")
    cy.get("#submit").click()

    cy.get('#result').should("have.text", 7)
  })

  it('Multiplication', () => {
    cy.visit('http://localhost:3009')
    cy.get('#num1').type(6)
    cy.get('#num2').type(2)
    cy.get('#select').select("multiple")
    cy.get("#submit").click()

    cy.get('#result').should("have.text", 12)
  })
})