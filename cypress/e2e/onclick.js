/// <reference types="cypress" />
let userName = 'nikita';
let pswrd = 'qwerty';

    describe("Sign in", () => {
        it("Log info", () => {
            cy.visit("https://panel.octoclick.com/sign-in/");
           cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .ant-input-affix-wrapper > .ant-input').type('nikitashevchenko@yandex.ru')
            cy.xpath('//input[@placeholder=\'password\']').type('Qwerty')
            cy.xpath('//button[@html-type=\'submit\']').click()
            cy.get('.ant-notification-notice-message').should('have.text', 'Вы успешно авторизовались')
        });

    })