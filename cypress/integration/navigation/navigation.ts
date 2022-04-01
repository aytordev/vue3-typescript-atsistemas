/// <reference types="cypress" />
context('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('cy.go() - go to Movies', () => {
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
      {
        id: 2,
        title: 'Mooring, The',
        poster: 'http://dummyimage.com/400x600.png/dddddd/000000',
        genre: ['Horror', 'Thriller'],
        year: 1987,
        duration: 187,
        imdbRating: 1.99,
        actors: [5, 6],
      },
      {
        id: 3,
        title: 'Black Rain (Kuroi ame)',
        poster: 'http://dummyimage.com/400x600.png/5fa2dd/ffffff',
        genre: ['Drama', 'War'],
        year: 2010,
        duration: 175,
        imdbRating: 6.25,
        actors: [1],
      },
    ]);
  });

  it('cy.go() - go to Movies Details', () => {
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
  });

  it('cy.go() - go to Edit', () => {
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
  });

  it('cy.go() - go to New', () => {
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
  });
});
