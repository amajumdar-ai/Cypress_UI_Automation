import NavBar from '../../support/PageObjects/Components/NavBar'
import CreateNewAccountPage from '../../support/PageObjects/Pages/CreateNewAccountPage'
import {url} from '../../support/config'


describe('Create new account with valid data', ()=>
{
    before(function()
    {
        cy.visit(url)
       
    })

    it('Create a new user', ()=>
    {
        NavBar.loginButton()
        CreateNewAccountPage.clickOnNewUser()
        CreateNewAccountPage.enterMobileNumber()
        CreateNewAccountPage.clickOnSubmitbtn()
        CreateNewAccountPage.setPassword()
        
    })
})