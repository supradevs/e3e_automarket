describe('Login sms', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('.inline-flex').click()
    cy.get('.fixed > .w-full > .items-center').click()
    cy.get('.bg-green-600').click()
  })
  it('New User', () => {
    cy.visit('http://localhost:3000')
    cy.get('.inline-flex').click()
    cy.get('.fixed > .w-full > .items-center').click()
    cy.get(':nth-child(5) > .font-semibold').click()    
  });
  
  
})