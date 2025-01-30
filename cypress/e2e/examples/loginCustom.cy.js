/// <reference types="cypress" />

describe( 'TestSuite', function()
{
    it( 'Login test', function()
    {
      cy.login('username','password')
      cy.title().should('be.eq', 'iMedidata | Login')
    })
}

)

