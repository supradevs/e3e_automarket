describe('Comprando producto en Mobile', () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(520, 740)
  })
  it('passes', () => {
    cy.visit('http://127.0.0.1:3000')
    cy.get('.inline-flex').click()
    cy.get(':nth-child(1) > .p-5').click()
    cy.wait(3000)
    cy.get(':nth-child(3) > .p-3 > .text-body').click()
    cy.get('.items-start > :nth-child(1) > .flex-col').click()
    cy.get('#email').type("lalo@automarketapp.com")
    cy.get('#password').type("password")
    cy.get('.px-6 > :nth-child(3)').click()
    cy.get(':nth-child(3) > .p-3 > .text-body').click()
    cy.get('.items-start > :nth-child(1) > .flex-col').click()
    cy.get('.min-w-content > :nth-child(1)').click()    
    cy.get('.fixed > .justify-between > .flex-1').click()    
    cy.get('.flex-col > .bottom-0 > .justify-between > .flex-1').click()
    cy.get(':nth-child(2) > .justify-between > .w-full').click()
    cy.get(':nth-child(1) > .bg-gray-300').click()
    cy.get('.undefined').type('123')
    cy.get('.border-t-4 > .inline-flex').click()
    
    //cy.get('#btnIngresar').click()
  })
  
})