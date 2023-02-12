/// <reference types="cypress" />


describe('Delete Customer Account', function(){
    it('Valid Delete Account', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Bank Manager Login').click();
        cy.get('[ng-class="btnClass3"]').click();
        cy.get(':nth-child(5) > :nth-child(5) > button').click();
        cy.get('tbody > :nth-child(5) > :nth-child(1)').should('not.exist');
    }),

    it('Find and Delete Account', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Bank Manager Login').click();
        cy.get('[ng-class="btnClass3"]').click();
        cy.get('.form-control').type('Potter')
        cy.get(':nth-child(5) > button').click();
        cy.contains('Potter').should('not.exist');
    }),

    it('Find Invalid Account', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Bank Manager Login').click();
        cy.get('[ng-class="btnClass3"]').click();
        cy.get('.form-control').type('Pooah');
        cy.contains('Pooah').should('not.exist');
    })
})