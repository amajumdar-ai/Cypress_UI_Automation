import NavBar from '../../support/PageObjects/Components/NavBar'
import {url}  from '../../support/config'

describe('Explore navbar compnents', ()=>
{
    before(function(){
        cy.visit(url)
        NavBar.clickonLogo()
        
    })

it('should search the items as entered in the search box', ()=>{
        NavBar.searchBox('Clothes')

        
    })
  
})