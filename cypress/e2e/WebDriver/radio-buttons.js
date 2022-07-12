/// <reference types="cypress" />
// npx cypress open
//./node_modules/.bin/cypress run headless mode
describe("Verify radio btns", () => {
    it("Validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
        cy.get('#radio-buttons').find("[type='radio']").first().check().should('be.checked')
        cy.get('#radio-buttons').find("[type='radio']").eq(2).check().should('be.checked')

    });
    it("Validate specific btns", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="lettuce"]').check().should('be.checked')
        cy.get('[value="cabbage"]').should('not.be.checked')


    })
})