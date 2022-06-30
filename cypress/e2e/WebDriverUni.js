/// <reference types="cypress" />
// npx cypress open
//./node_modules/.bin/cypress run headless mode
describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
        //cy.get('#contact-us').click({force: true})
        cy.title().should("include", 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus');
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.get('[name="first_name"]').type("NIKITA");
        cy.get('[name="last_name"]').type("blogs");
        cy.get('[name="email"]').type("NIKITA@gmail.com")
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
        cy.get('[name="first_name"]').type("Tom");
        cy.get('[name="last_name"]').type("blogs");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    });
})