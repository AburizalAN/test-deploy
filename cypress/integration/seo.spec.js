const lighthousemetrics = {
  performance: 95,
  accessibility: 100,
  'best-practices': 95,
  seo: 85,
  pwa: 100,
};

describe('seo standard', () => {
  it('visit', () => {
    cy.visit('http://localhost:3000');
  });

  it('Verify page title', () => {
    cy.log('title', cy.title());
    cy.title().should('eq', 'Awal Mula');
  });

  it('Verify page description', () => {
    cy.get('meta[name="description"]').should(
      'have.attr',
      'content',
      'description'
    );
  });

  it('audits the home page', () => {
    cy.lighthouse(lighthousemetrics);
  });
});
