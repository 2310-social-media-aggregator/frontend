describe('application user flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://be2310-social-media-aggregator-18a4f3a92617.herokuapp.com/api/v1/creators', {
      statusCode: 200,
      fixture: 'mock-creators'
    });
    cy.intercept('GET', 'https://be2310-social-media-aggregator-18a4f3a92617.herokuapp.com/api/v1/users/1', {
      statusCode: 200,
      fixture: 'mock-user'
    });
    cy.visit('http://localhost:3000/');
  });
  
  it('displays the home page and expected elements on initial load', () => {
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.header-title h1').contains('PLATFORM');
    cy.get('h2').contains('Welcome, Mock Thomas');
    cy.get('.nav-item').contains('Home');
    cy.get('.nav-item').contains('All Creators');
    cy.get('.nav-item').contains('Saved Creators');
    cy.get('.start-btn').contains('Get Started');
  });

  it('takes user to all creators page and displays expected elements by clicking get started button', () => {
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.start-btn').contains('Get Started').click();
    cy.url().should('eq', 'http://localhost:3000/main');
    cy.get('.header-title h1').contains('PLATFORM');
    cy.get('h2').contains('Welcome, Mock Thomas');
    cy.get('.nav-item').contains('Home');
    cy.get('.nav-item').contains('All Creators');
    cy.get('.nav-item').contains('Saved Creators');
    cy.get('.overlay').should('exist');
    cy.get('.card').should('have.length', 5);
    cy.get('.card').first().contains('Mock Aztecross');
    cy.get('.card').last().contains('Mock Bawkbasoup');
  });

  it('takes user to all creators page and displays expected elements by clicking all creators button', () => {
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.nav-item').contains('All Creators').click();
    cy.url().should('eq', 'http://localhost:3000/main');
    cy.get('.header-title h1').contains('PLATFORM');
    cy.get('h2').contains('Welcome, Mock Thomas');
    cy.get('.nav-item').contains('Home');
    cy.get('.nav-item').contains('All Creators');
    cy.get('.nav-item').contains('Saved Creators');
    cy.get('.overlay').should('exist');
    cy.get('.card').should('have.length', 5);
    cy.get('.card').first().contains('Mock Aztecross');
    cy.get('.card').last().contains('Mock Bawkbasoup');
  });

  it('takes user to saved creators page and displays expected elements by clicking saved creators button', () => {
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.nav-item').contains('Saved Creators').click();
    cy.url().should('eq', 'http://localhost:3000/main');
    cy.get('.header-title h1').contains('PLATFORM');
    cy.get('h2').contains('Welcome, Mock Thomas');
    cy.get('.nav-item').contains('Home');
    cy.get('.nav-item').contains('All Creators');
    cy.get('.nav-item').contains('Saved Creators');
    cy.get('.overlay').should('exist');
    cy.get('.card').should('have.length', 2);
    cy.get('.card').first().contains('Mock Northernlion');
    cy.get('.card').last().contains('Mock Bobbeigh');
  });

  it('takes user back to home page and displays expected elements by clicking home button', () => {
    cy.visit('http://localhost:3000/main');
    cy.url().should('eq', 'http://localhost:3000/main');
    cy.get('.nav-item').contains('Home').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.header-title h1').contains('PLATFORM');
    cy.get('h2').contains('Welcome, Mock Thomas');
    cy.get('.nav-item').contains('Home');
    cy.get('.nav-item').contains('All Creators');
    cy.get('.nav-item').contains('Saved Creators');
    cy.get('.start-btn').contains('Get Started');
  });


  it('renders the NotFound page if user visits a non-existent url AND allows user to return back to Home page', () => {
    cy.visit('http://localhost:3000/potato');
    cy.get('.not-found-title').contains('Page not found!');
    cy.get('.not-found-msg').contains('Please return to the home page and try again.');
    cy.get('.return-btn').contains('Return Home').click();
    cy.url().should('eq', 'http://localhost:3000/');
  })
});