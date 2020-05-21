// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// -- This is a parent command --
 Cypress.Commands.add("login", (username,password) => {

   
  cy.xpath('//input[@class="_2zrpKA _1dBPDZ"]').type('91133962')
  cy.xpath('//input[@class="_2zrpKA _3v41xv _1dBPDZ"]').type('aa2378')
    

   
    
       })

import {addMatchImageSnapshotCommand} from  'cypress-image-snapshot/command'
addMatchImageSnapshotCommand()      

Cypress.Commands.add('isVisible', selector =>
{
cy.get(selector).should('be.visible')
})

