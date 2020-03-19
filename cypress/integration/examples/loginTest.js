describe( 'TestSuite', function()
{
    it( 'Verify title of the page', function()
    {
      cy.visit('https://login-sandbox.imedidata.net/login')
      cy.title().should('eq','iMedidata | Login')
    })
}

)

