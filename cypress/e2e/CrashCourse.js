/// <reference types="cypress" />
// npx cypress open
//./node_modules/.bin/cypress run headless mode
describe("Test1", () => {
    it("Test1.1", () => {
       // cy.viewport(1280, 720)
        cy.visit("http://www.webdriveruniversity.com/")
        cy.contains('CONTACT US').should('exist')
        cy.get("#contact-us").invoke("removeAttr", "target").click({force: true});
        cy.go('back')
        cy.log('next')
        cy.debug()

    })




})