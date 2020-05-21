export default class NavBar{
    static clickonLogo(){
        cy.get('._1e_EAo').click()
    }

    static searchBox(text)
    {
        cy.get('.LM6RPg').type(text)
        cy.xpath('//button[@class="vh79eN"]').click()
    }

    static loginButton()

    {
        const loginbtn=cy.get('._3Ep39l')
        loginbtn.click()
    }
}