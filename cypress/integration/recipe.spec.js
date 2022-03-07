describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000');

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="recipe"]').click();

    // The new url should include "/recipe"
    cy.url().should('include', '/recipe');

    // The new page should contain an h1 with "recipe page"
    cy.get('h1').contains('Resep Terpopuler');
  });
});
