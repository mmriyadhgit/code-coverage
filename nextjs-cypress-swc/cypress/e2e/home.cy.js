describe('Home Page', () => {
  it.skip('Display NavBar', () => {
    cy.visit('/')
    cy.get('nav').should('exist');
  });
});