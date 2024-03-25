describe('application user flows', () => {
  it('displays the home page and expected elements on initial load', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.header-title h1').contains('Social Media App');
  });

  it('renders the NotFound page if user visits a non-existent url AND allows user to return back to Home page', () => {
    cy.visit('http://localhost:3000/potato');
    cy.get('.not-found-title').contains('Page not found!');
    cy.get('.not-found-msg').contains('Please return to the home page and try again.');
    cy.get('.return-btn').contains('Return Home').click();
    cy.url().should('eq', 'http://localhost:3000/');
  })
});
