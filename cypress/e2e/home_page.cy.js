describe('Primeros Test Aut', () => {
  it('Ingreso a listado de shops y login', () => {
    cy.visit('http://localhost:3000')
    cy.get('.inline-flex').click()
    cy.get('.fixed > .w-full > .items-center').click()
    cy.get('#email').type("lalo@automarketapp.com")
    cy.get('#password').type("password")
    cy.get('.px-6 > :nth-child(3)').click()
  })
  
})