/// <reference types="cypress" />
describe('Login to webpage using fixture data', () => 
{
it('Login to webpage', ()=> {
cy.visit('https://login-sandbox.imedidata.net/login')
cy.fixture('example').then(user=>
    {
        const username= user.username
        const password=user.password
        
    cy.get('#session_username').type(username)
    cy.get('#session_password').type(password)
    cy.get ('#create_session_link').click
    })

})

})