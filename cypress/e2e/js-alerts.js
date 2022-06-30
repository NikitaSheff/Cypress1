/// <reference types="Cypress" />

describe("Handle JS alerts", ()=>
{
    it("Confirm JS alert contains the correct text ", ()=>
    {
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        cy.get('#button1').click()
    });


})
