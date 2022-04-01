/// <reference types="cypress" />
let newId;

describe('employees API', () => {
  it('verify request returns JSON', () => {
    cy.request('http://localhost:3001/movies')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

  it('verify the request returns the correct status code', () => {
    cy.request('http://localhost:3001/movies')
      .its('status')
      .should('be.equal', 200);
  });

  it('verify the request returns 50 items', () => {
    cy.request('http://localhost:3001/movies')
      .its('body')
      .should('have.length', 10);
  });

  it('Add a new item', () => {
    cy.request('POST', 'http://localhost:3001/movies', {
      title: 'New',
      poster: 'http://dummyimage.com/400x600.png/cc0000/ffffff',
      genre: ['New'],
      year: 0,
      duration: 0,
      imdbRating: 0,
      actors: [1],
    })
      .its('body')
      .then((body) => {
        newId = body.id;
      });
  });

  it('Verify the new item exists exists', () => {
    cy.request('http://localhost:3001/movies/' + newId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'New');
      expect(response.body).to.have.property('year', 0);
      expect(response.body).to.have.property('duration', 0);
    });
  });

  it('Delete the newly added item', () => {
    cy.request('DELETE', 'http://localhost:3001/movies/' + newId).then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });

  it('Verify the item was deleted', () => {
    cy.request({
      url: 'http://localhost:3001/movies/' + newId,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
