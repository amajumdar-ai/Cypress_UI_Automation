import './commands'

class LoginPage
{
    launchBrowser()
    {
        cy.visit('https://login-sandbox.imedidata.net/login')
    }

    enterCreadentials(username,password)
    {
        cy.fixture('example').then(user=>
            {
                const username= user.username
                const password=user.password
                
            const field1=cy.get('[#session_username]')
            field1.clear
            field1.type(username)

            const field2= cy.get('[#session_password]')
            field2.clear
            field2.type(password)
            return this

    })
    loginBtn()
    {
        const btn=cy.get ('[#create_session_link]')
        btn.click
    }
    }
}

export default LoginPage