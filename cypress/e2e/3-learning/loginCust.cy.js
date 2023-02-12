/// <reference types="cypress" />


describe('Login Customer', function(){
    it('Valid Login Customer', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Customer Login').click();
        cy.get('[id = "userSelect"]').select('Hermoine Granger');
        cy.contains('Login').click();
        cy.contains('Welcome').should('exist');
    }),

    it('Invalid Login Customer', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Customer Login').click();
        cy.get('select option:contains(Draco Malfoy)').should('not.exist');
    }),

    it('No Choose  Customer', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Customer Login').click();
        cy.contains('---Your Name---').should('exist');
    })
})