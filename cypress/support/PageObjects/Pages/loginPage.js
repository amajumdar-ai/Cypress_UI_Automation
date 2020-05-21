/// <reference types="cypress" />

import HomePage from "./HomePage"

export default class loginPage
{
     static  login(username,password)
    {
    cy.login(username,password)
   
    
    }

    static clickOnLogintn()
    {
        const loginbtn=cy.xpath('//button[@class="_2AkmmA _1LctnI _7UHT_c"]')
        loginbtn.click()
    }

    static verifyTitle()
    {
        cy.title().should('be.equal','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
    }

    static logOut()
    {
        //cy.xpath('//div[@class="_2aUbKa"]')
        const logout=cy.xpath('//div[@class="_34Yjv1"]')
        logout.click()
    }
    
    static InvalidInputs()
    {
        cy.fixture('Input').then(data=>   
        {
            const mobilenumber= data.mobile1
            const password= data.password

           cy.xpath('//input[@class="_2zrpKA _1dBPDZ"]').type(mobilenumber)
           cy.xpath('//input[@class="_2zrpKA _3v41xv _1dBPDZ"]').type(password)

        
           
        })
    }

}


