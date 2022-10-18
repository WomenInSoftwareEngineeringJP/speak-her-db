describe('Visits the nominate page', () => {
  before(() => {
    cy.visit('/nominate-speaker');
  });

  it.skip('Nominates a speaker', () => {
    // TODO
    // please use cy.intercept on this test to avoid spamming our airtable form
  })
})