/// <reference types="cypress" />


describe('Cek Transaction', function(){
    it('Valid Cek Transaction', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Customer Login').click();
        cy.get('[id = "userSelect"]').select('Hermoine Granger');
        cy.contains('Login').click();
        cy.contains('Transactions').click();
        cy.get('[ng-model = "startDate"]').should('exist');
    })
})