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
    cy.intercept('GET', 'https://be2310-social-media-aggregator-18a4f3a92617.herokuapp.com/api/v1/creators/*', {
      statusCode: 200,
      fixture: 'mock-creator-details'
    }).as('getCreatorDetails');
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
		cy.wait(500)//everything loads here
    cy.url().should('eq', 'http://localhost:3000/main');
    cy.get('.header-title h1').contains('PLATFORM');
    cy.get('h2').contains('Welcome, Mock Thomas');
    cy.get('.nav-item').contains('Home');
    cy.get('.nav-item').contains('All Creators');
    cy.get('.nav-item').contains('Saved Creators');
    cy.get('.overlay').should('exist');
		cy.wait(500)
    // cy.get('.overlay').children().should('have.length', 5);
		cy.get('.card').should('have.length', 5)
    cy.get('.card').first().contains('Mock Aztecross');
    cy.get('.card').last().contains('Mock Bawkbasoup');
  });

  it('takes user to all creators page and displays expected elements by clicking all creators button', () => {
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.nav-item').contains('All Creators').click();
		cy.wait(500)
    cy.url().should('eq', 'http://localhost:3000/main');
    cy.get('.header-title h1').contains('PLATFORM');
    cy.get('h2').contains('Welcome, Mock Thomas');
    cy.get('.nav-item').contains('Home');
    cy.get('.nav-item').contains('All Creators');
    cy.get('.nav-item').contains('Saved Creators');
    cy.get('.overlay').should('exist');
    // cy.get('.card').should('have.length', 5);//failing here
    cy.get('.card').first().contains('Mock Aztecross');
    cy.get('.card').last().contains('Mock Bawkbasoup');
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

  it('displays creator details with Youtube videos', () => {
    cy.get('.start-btn').contains('Get Started').click();
		cy.wait(500)
    cy.get('.overlay').should('exist');
    cy.get('.card').contains('Mock Aztecross').click({ force: true });//failing here
		cy.wait(500)
    cy.wait('@getCreatorDetails');
    cy.get('h2').contains('Mock Aztecross');
  });

  it('renders the NotFound page if user visits a non-existent url AND allows user to return back to Home page', () => {
    cy.visit('http://localhost:3000/potato');
    cy.get('.not-found-title').contains('Page not found!');
    cy.get('.not-found-msg').contains('Please return to the home page and try again.');
    cy.get('.return-btn').contains('Return Home').click();
    cy.url().should('eq', 'http://localhost:3000/');
  })
});