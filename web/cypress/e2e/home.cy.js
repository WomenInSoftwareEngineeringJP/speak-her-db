// TODO: move that to somewhere
Cypress.Commands.add('getByLabel', (label) => {
  // you can disable individual command logging
  // by passing {log: false} option
  cy.contains('label', label)
    .invoke('attr', 'for')
    .then((id) => {
      cy.get('#' + id)
    })
})

describe('Visits the home page', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Displays the Hero Section', () => {
    cy.get("h1").contains("SpeakHer");
  })

  it('Navigates to nominate form', () => {
    cy.get("#home-nominate").contains("Nominate a speaker").click();
    cy.get("h1").contains("Nominate a speaker")
  })

  it('Searches for a speaker by tag', () => {
    cy.getByLabel("Topic").should('have.value', '').type("AI");
    cy.getByLabel("Topic").should('have.value', 'AI');
    cy.get("#speaker-list").contains('AI');
  })

  it('Searches for a speaker by prefecture', () => {
    cy.getByLabel("Prefecture").should('have.value', '').type("Tokyo / 東京都");
    cy.getByLabel("Prefecture").should('have.value', 'Tokyo / 東京都');
    cy.get("#speaker-list").contains('Tokyo / 東京都');
  })

  it('Expands information panel for speaker', () => {
    cy.get("#speaker-list .v-expansion-panels button").first().click();
    cy.get("#speaker-list .v-expansion-panels button.v-expansion-panel-header--active").should('have.length', 1);
  })

  it('Switches from English to Japanese with the locale selector', ()=> {
    // TODO
    cy.get('header button#desktop-toolbar-language-switcher').contains('日本語').click();
    cy.get('h2').contains('日本にいる女性スピーカーを探すデータベース');
    cy.get('header button#desktop-toolbar-language-switcher').contains('English');
  })

  it('Displays the footer', () => {
    cy.get('footer').contains('SpeakHer Japan 2022')
  })
})
