describe('Login sms', () => {

  beforeEach(() => {
    
    cy.viewport(720, 640)
   /*  cy.exec('npm run migrations', { timeout: 20000 })
    cy.exec('npm run seeders', { timeout: 20000 }) */

  })


  it('New User', () => {
    cy.task('conex')
    cy.visit('/')
    cy.get('.inline-flex').click()
    cy.get('.fixed > .w-full > .items-center').click()
    cy.get(':nth-child(5) > .font-semibold').click()
    cy.get('#name').type('Eduardo')
    cy.get('#lastName').type('Martinez')    
    cy.get('.form-control').type('38153908877')
    cy.get('#email').type('eduardo@bitabit.com.ar')
    cy.get('#password').type('123456')
    cy.get('.mt-8 > .inline-flex').click()


    //cy.get('.mt-8 > .inline-flex').click()
    //cy.get('.mt-2').should()
  });
  /* it('Login email alta', () => {
    cy.visit('http://agenciasupra.com/webmail')
    cy.get('#rcmloginuser').type('eduardo@agenciasupra.com')
    cy.get('#rcmloginpwd').type('Asupra@2020')
    cy.get('#rcmloginsubmit').click()
    cy.get('#rcmrowNTEy > td.subject > .subject').click()
  }); */
})