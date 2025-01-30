describe('Test Automation Demo Site', () => {
    
    before(() => {
        // Using the fixture URL to load the main page
        cy.fixture('urls.json').then((data) => {
            cy.log('Visiting main URL:', data.mainUrl);  // Log the URL
            cy.visit(data.mainUrl);
        });
    });

    it('Verify the Title of the page', () => {
        cy.title().should('include', 'Want to practice test automation? Try these demo sites! | Automation Panda');
        cy.log('Page title verified');
    });

  
    it('Click on Speaking and verify the title of the Page', () => {
        // Visit the main page
        cy.visit('https://automationpanda.com/2021/12/29/want-to-practice-test-automation-try-these-demo-sites/');
        
        // Click on the 'Speaking' link
        cy.contains('Speaking').click();
        
        // Verify the title of the page
        cy.title().should('include', 'Speaking | Automation Panda');
    });
    
    it('Verify the Keynote Addresses section is present and check its text', () => {
        // Visit the main page
        cy.visit('https://automationpanda.com/speaking/');

        // Increase the timeout to wait for the element to be visible
        cy.get('h2.wp-block-heading', { timeout: 10000 })
            .contains('Keynote Addresses')  // Check the text inside the h2 element
            .and('have.text', 'Keynote Addresses');  // Assert the correct text
    });
    after(() => {
        // Log when the tests are complete
        cy.log('Test Execution Completed');
    });

});
