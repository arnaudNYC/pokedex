import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:3000/';
Given('I open the pokedex', () => {
  cy.visit(url);
});

Then('I see a list of {int} pokemons', length => {
  cy.get('[data-cy^=p-]').should($p => {
    expect($p).to.have.length(length);
  });
});

When('I click on a pokemon', () => {
  cy.get('[data-cy=p-1]').click();
});

Then('I see a list of attributes', () => {
  cy.get('[data-cy=pokemon-dialog]').should('be.visible');
});

When('I click on the {string} button', buttonId => {
  cy.get(`[data-cy=${buttonId}-button]`).click();
});

Then('I do not see a list of attributes', () => {
  cy.get('[data-cy=pokemon-dialog]').should('not.be.visible');
});
