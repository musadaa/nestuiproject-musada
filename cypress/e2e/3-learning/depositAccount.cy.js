/// <reference types="cypress" />


describe('Deposit', function(){
    it('Valid Deposit', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Customer Login').click();
        cy.get('[id = "userSelect"]').select('Hermoine Granger');
        cy.contains('Login').click();
        cy.contains('Deposit').click();
        cy.get('[ng-model = "amount"]').type('13000000');
        cy.get('form').submit();        
        cy.contains('Deposit Successful').should('exist');
    }),
    it('Invalid Deposit', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Customer Login').click();
        cy.get('[id = "userSelect"]').select('Hermoine Granger');
        cy.contains('Login').click();
        cy.contains('Deposit').click();
        cy.get('[ng-model = "amount"]').type('duapuluhribu');
        cy.get('form').submit();  
        cy.contains('Deposit Successful').should('not.exist');
    })
})