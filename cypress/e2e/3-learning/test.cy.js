/// <reference types="cypress" />

const { contains } = require("cypress/types/jquery");


describe('Add Customer', function(){
    it('Valid Add Customer', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Bank Manager Login').click();
        cy.get('[ng-class="btnClass1"]').click();
        cy.get(':nth-child(1) > .form-control').type('Harry');
        cy.get(':nth-child(2) > .form-control').type('Rabu');
        cy.get(':nth-child(3) > .form-control').type('65432');
    })
})