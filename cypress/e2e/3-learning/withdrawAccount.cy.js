/// <reference types="cypress" />


describe('Withdrawl', function(){
    it('Valid Deposit', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Customer Login').click();
        cy.get('[id = "userSelect"]').select('Hermoine Granger');
        cy.contains('Login').click();
        cy.contains('Withdrawl').click();
        cy.get('[ng-model = "amount"]').type('2000');
        cy.get('form').submit();        
        cy.contains('Transaction successful').should('exist');
    }),
    it('Invalid Withdrawl More Than Amount', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Customer Login').click();
        cy.get('[id = "userSelect"]').select('Hermoine Granger');
        cy.contains('Login').click();
        cy.contains('Withdrawl').click();
        cy.get('[ng-model = "amount"]').type('90000000');
        cy.get('form').submit();  
        cy.contains('Transaction Failed. You can not withdraw amount more than the balance').should('exist');
    }),

    it('Invalid Withdrawl', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Customer Login').click();
        cy.get('[id = "userSelect"]').select('Hermoine Granger');
        cy.contains('Login').click();
        cy.contains('Withdrawl').click();
        cy.get('[ng-model = "amount"]').type('sembilan juta');
        cy.get('form').submit();  
        cy.contains('Transaction successful').should('not.exist');
    })
})