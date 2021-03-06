/// <reference types="Cypress" />

describe("Test Contact us form via AUTOMATION TEST Store", ()=>
{
    it("Should be able to submit a successful ", ()=>
    {
        cy.visit("https://www.automationteststore.com/");
    });
    it.only("Should be able to submit a successful ", ()=>
    {
        cy.visit("https://www.automationteststore.com/")
        //cy.get('.info_links_footer > :nth-child(5)>a').click();

        cy.xpath("//a[contains(@href,'contact')]").click().then(function (linkText){
            cy.log("Start test! Click on linq! Go! " + linkText.text())
        });
       // cy.get('#ContactUsFrm_first_name').type("Niki")
        cy.xpath("//input[@id='ContactUsFrm_first_name']").type("Niki")
        cy.get('#ContactUsFrm_email').type("n@n.ru")
        cy.get('#ContactUsFrm_email').should('have.attr', 'name','email' )
        cy.get('#ContactUsFrm_enquiry').type("do you do?")
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log('Test has been completed!')
    });

})
