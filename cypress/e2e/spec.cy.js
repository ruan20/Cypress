describe('Primeiro teste com cypress', () => {
  it('Does not do much', () => {
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
    cy.contains('End-to-End Testing').click()
    cy.contains('Testing Your App').click()
    
    cy.url().should('include', 'end-to-end-testing/testing-your-app')

    //cy.get('.action-email').type('fake@email.com')

    //cy.get('.action-email').should('have-value','fake@email.com')
  })
})