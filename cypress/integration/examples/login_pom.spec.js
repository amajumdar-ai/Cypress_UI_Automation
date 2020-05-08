/// <reference types="cypress" />
import LoginPage from '../../support/PageObjectClasses/LoginPage'

describe('Test Suite', ()=>
{
    it('Login Test using POM concept', ()=>
    {
        const login=new LoginPage()
        login.launchBrowser()
        login.enterCreadentials('un','pwd')
        login.loginBtn()
        cy.title().should('be.equal', 'iMedidata')
        cy.screenshot()

    })
})