describe('Bugs Page', () => {
  it('Display Bugs Page', () => {
    cy.visit('/bugs')
    cy.get('nav').should('exist');
    cy.contains('Bugs Page'); 
    // middleware cookie
    cy.getCookie('page')
    .should('have.property', 'value', 'bugs');
    cy.get('form').contains('Create Bug!').click();
  });
});