/// <reference types="cypress" />


export default class CreateNewAccount{

    static clickOnNewUser()
    {
        const newUser=cy.get('.oZoRPi')
        newUser.click()
    }

    static  enterMobileNumber()
    {
        const mobileNumber= cy.xpath('//input[@class="_2zrpKA _1dBPDZ"]')
        mobileNumber.type('70336331')
       
    }

    static clickOnSubmitbtn()
    {
        const submitbtn=cy.xpath('//button[@class="_2AkmmA _1LctnI _7UHT_c"]')
        submitbtn.click()
    }

    static setPassword()
    {
        const pwd=cy.xpath('//input[@type="password"]')
        pwd.type('12345678')
    }

    static clickOnSignUpbtn()
    {
        const signup=cy.xpath('//button[@class="_2AkmmA _1LctnI _7UHT_c"]')
        signup.click()
    }


}   