describe('Login sms', () => {
  it('passes', async () => {
    cy.visit('http://127.0.0.1:3000')
    cy.get('.inline-flex').click()
    cy.get('.fixed > .w-full > .items-center').click()
    cy.get('.bg-green-600').click()
    cy.get('#phone').type("3815390922")
    cy.get('.text-left > .inline-flex').click()
  })
  /* it('New User', () => {
    cy.visit('http://localhost:3000')
    cy.get('.inline-flex').click()
    cy.get('.fixed > .w-full > .items-center').click()
    cy.get(':nth-child(5) > .font-semibold').click()    
  }); */
})