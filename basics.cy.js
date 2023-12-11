/// <reference types="Cypress"/>

describe('task page', () => {
  it('should display the main image', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.main-header').find('img');
    cy.get('.main-header img').should('exist');
    // cy.get('.main-header img')//=> also works
  });

  it('should display the page title', () => {
    cy.visit('http://localhost:5173/');
    cy.get('h1').should('have.length', 1);
    cy.get('h1').contains('My Cypress Course Tasks');
    //cy.contains('My Cypress Course Tasks')//=> also works;
  });
});