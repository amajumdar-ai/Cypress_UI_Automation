import LoginPage from "./loginPage"

export default class HomePage extends LoginPage{



    static verifyLogo()
    {
        const logo= cy.xpath('//img[@src="66df95d0f4663da812e90b4ef6d7041728e89e3f31bbccb97432.png"]')
        .should('be.visible')
    
    }
    static verifyTitle()    
    {
        cy.title().should('be.equal', 'hello')
    }

    static clickOnCDS()
    {
        const CDS= cy.xpath('//a[@id="study_group_256457_manage_link"]')
        CDS.click()
        
    }   

}