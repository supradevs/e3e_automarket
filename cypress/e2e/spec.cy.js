describe('Primer Test', () => {
    it('pas', () => {
      cy.origin( 'cypress.io', () =>{
        cy.task('conex', 'This will be output to the terminal').then((data) => {
      })
  //        global.db.User.findOne().then(function(usuario){
    })
  })
})
