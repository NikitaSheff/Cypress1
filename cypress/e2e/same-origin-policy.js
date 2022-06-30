/// <reference types="Cypress" />

describe("Cypress web security", () => {
    it("Validate visiting to diff domains ", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://www.automationteststore.com/');
    });
    it("Validate visiting to diff domains via user actions ", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()

    });

})
