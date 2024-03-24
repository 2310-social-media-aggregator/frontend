describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.header-title h1').contains('Social Media App');
  });
});
