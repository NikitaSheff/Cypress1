/// <reference types="Cypress" />

describe("Handle JS alerts", ()=>
{
    it("Confirm JS alert contains the correct text ", ()=>
    {
        cy.visit("https://www.automationteststore.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})

    });


})
