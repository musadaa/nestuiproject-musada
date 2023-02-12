/// <reference types="cypress" />


describe('Add Customer', function(){
    it('Valid Add Customer', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Bank Manager Login').click();
        cy.get('[ng-class="btnClass1"]').click();
        cy.get(':nth-child(1) > .form-control').type('Harry');
        cy.get(':nth-child(2) > .form-control').type('Kamis');
        cy.get(':nth-child(3) > .form-control').type('65432');
        cy.get('form').submit();
        cy.on('window:alert',(txt)=>{
            //Assertion
            expect(txt).to.contains('Customer added successfully with customer id');
            })

    }),

    it('Exist Customer', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Bank Manager Login').click();
        cy.get('[ng-class="btnClass1"]').click();
        cy.get(':nth-child(1) > .form-control').type('Neville');
        cy.get(':nth-child(2) > .form-control').type('Longbottom');
        cy.get(':nth-child(3) > .form-control').type('E89898');
        cy.get('form').submit();
        cy.on('window:alert',(txt)=>{
            //Assertion
            expect(txt).to.contains('Please check the details. Customer may be duplicate.');
            })

    }),

    it('Empty Last Name', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Bank Manager Login').click();
        cy.get('[ng-class="btnClass1"]').click();
        cy.get(':nth-child(1) > .form-control').type('Neville');
        cy.get(':nth-child(3) > .form-control').type('E89068769');
        cy.get('form').submit();
        cy.get('input:invalid').should('have.length', 1)
        cy.get('[placeholder = "Last Name"]').then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    }),

    it('Empty First Name', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Bank Manager Login').click();
        cy.get('[ng-class="btnClass1"]').click();
        cy.get(':nth-child(1) > .form-control').type('Neville');
        cy.get(':nth-child(3) > .form-control').type('E89068769');
        cy.get('form').submit();
        cy.get('input:invalid').should('have.length', 1)
        cy.get('[placeholder = "First Name"]').then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    }),

    it('Empty Post Code', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Bank Manager Login').click();
        cy.get('[ng-class="btnClass1"]').click();
        cy.get(':nth-child(1) > .form-control').type('Neville');
        cy.get(':nth-child(3) > .form-control').type('E89068769');
        cy.get('form').submit();
        cy.get('input:invalid').should('have.length', 1)
        cy.get('[placeholder = "Post Code"]').then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    })
    
})