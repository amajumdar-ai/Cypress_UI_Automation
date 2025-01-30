/// <reference types="cypress" />
import NavBar from '../../support/PageObjects/Components/NavBar'
import loginPage from '../../support/PageObjects/Pages/loginPage'
import {url}  from '../../support/config'


describe('Test Suite', ()=>
{
    before(function(){
        cy.clearCookies()
        cy.clearLocalStorage()      
        cy.visit(url)
       
    })

    it('Login Test Using Valid data', ()=>
        {
           NavBar.loginButton()
           loginPage.login('username', 'password')
           loginPage.clickOnLogintn()
           loginPage.verifyTitle()
           
           
            })
    })
    
