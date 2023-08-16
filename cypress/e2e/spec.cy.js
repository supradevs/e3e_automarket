
describe('Primer Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('.inline-flex').click()
    //cy.contains('type').click()
  })
})
