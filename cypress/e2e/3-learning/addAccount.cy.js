/// <reference types="cypress" />


describe('Add Customer Account', function(){
    it('Valid Add Account', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Bank Manager Login').click();
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('[id = "userSelect"]').select('Hermoine Granger');
        cy.get('[id = "currency"]').select('Pound');
        cy.get('form').submit();
        cy.on('window:alert',(txt)=>{
            //Assertion
            expect(txt).to.contains('Account created successfully with account Number');
            })
    }),

    it('Invalid Add Account Empty Username', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Bank Manager Login').click();
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('[id = "currency"]').select('Pound');
        cy.get('form').submit();
        cy.get('[id = "userSelect"]').then(($input) => {
            expect($input[0].validationMessage).to.eq('Please select an item in the list.')
        })
    }),

    it('Invalid Add Account Empty Currency', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Bank Manager Login').click();
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('[id = "userSelect"]').select('Hermoine Granger');
        cy.get('form').submit();
        cy.get('[id = "currency"]').then(($input) => {
            expect($input[0].validationMessage).to.eq('Please select an item in the list.')
        })
    }),

    it('Invalid Add Account Empty', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Bank Manager Login').click();
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('form').submit();
        cy.get('[id = "userSelect"]').then(($input) => {
            expect($input[0].validationMessage).to.eq('Please select an item in the list.')
        })
    })
})