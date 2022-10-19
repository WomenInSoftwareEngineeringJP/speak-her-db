describe('Visits the home page', () => {
  before(() => {
    cy.visit('/');
  });

  it('Displays the Hero Section', () => {
    cy.get("h1").contains("SpeakHer");
  })

  it.skip('Navigates to nominate form', () => {
    // TODO
  })

  it.skip('Searches for a speaker by tag', () => {
    // TODO
  })

  it.skip('Searches for a speaker by prefecture', () => {
    // TODO
  })

  it.skip('Expands information panel for speaker', () => {
    // TODO
  })

  it.skip('Switches from English to Japanese with the locale selector', ()=> {
    // TODO
    // Confirm that site header is in japanese
    // Confirm that speaker name switches from english to japanese
  })

  it.skip('Displays the footer', () => {
    
  })
})