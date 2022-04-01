/// <reference types="cypress" />
context('Movie', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Edit a Movie', () => {
    cy.get(`[aria-label="menu-button"]`).click();
    cy.get('div').contains('Movies').click();
    cy.intercept('http://localhost:3001/movies', [
      {
        id: 1,
        title: 'Dancing Lady',
        poster: 'http://dummyimage.com/400x600.png/cc0000/ffffff',
        genre: ['Comedy', 'Musical', 'Romance'],
        year: 2006,
        duration: 161,
        imdbRating: 8.27,
        actors: [4, 5, 6],
      },
    ]);
    cy.get(`[aria-label="movie-details"]`).click();
    cy.get(`[aria-label="edit"]`).click();
    cy.get(`[aria-label="title"]`).type('New title');
    cy.get(`[aria-label="poster"]`).type('New poster');
    cy.get(`[aria-label="year"]`).type('2022');
    cy.get(`[aria-label="duration"]`).type('120');
    cy.get(`[aria-label="score"]`).type('10');
    cy.get(`[aria-label="edit"]`).click();
  });

  it('Create a Movie', () => {
    cy.get(`[aria-label="menu-button"]`).click();
    cy.get('div').contains('Movies').click();
    cy.intercept('http://localhost:3001/movies', [
      {
        id: 1,
        title: 'Dancing Lady',
        poster: 'http://dummyimage.com/400x600.png/cc0000/ffffff',
        genre: ['Comedy', 'Musical', 'Romance'],
        year: 2006,
        duration: 161,
        imdbRating: 8.27,
        actors: [4, 5, 6],
      },
    ]);
    cy.get(`[aria-label="new"]`).click();
    cy.get(`[aria-label="title"]`).type('New title');
    cy.get(`[aria-label="genre"]`).type('New genre{enter}');
    cy.get(`[aria-label="actors"]`).type('New actor{enter}');
    cy.get(`[aria-label="poster"]`).type('New poster');
    cy.get(`[aria-label="year"]`).type('2022');
    cy.get(`[aria-label="duration"]`).type('120');
    cy.get(`[aria-label="score"]`).type('10');
    cy.get(`[aria-label="new"]`).click();
  });

  it('Delete a movie', () => {
    cy.get(`[aria-label="menu-button"]`).click();
    cy.get('div').contains('Movies').click();
    cy.intercept('http://localhost:3001/movies', [
      {
        id: 1,
        title: 'Dancing Lady',
        poster: 'http://dummyimage.com/400x600.png/cc0000/ffffff',
        genre: ['Comedy', 'Musical', 'Romance'],
        year: 2006,
        duration: 161,
        imdbRating: 8.27,
        actors: [4, 5, 6],
      },
    ]);
    cy.get(`[aria-label="movie-details"]`).click();
    cy.get(`[aria-label="delete"]`).click();
  });
});
