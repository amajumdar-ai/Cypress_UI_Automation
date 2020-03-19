/// <reference types="cypress" />
describe('Login Test Suite', function()
{
    it('Verify that the user is able to login into Medidata homepage', function()
    {
        cy.visit('https://login-sandbox.imedidata.net/login')
        cy.get("#session_username").type("armajumdar")
        cy.get("#session_password").type('ARPkool1294#')
        cy.get("#create_session_link").click
    })
})