describe('Change name on settings page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/settings')
    cy.get('input[name="changeName"]').clear()
    cy.get('input[name="changeName"]').type('Cypress')
    cy.get('button').click()
  })

  it('name appears on todo pages', () => {
    cy.get('img[name="todoIcon"]').click()
    cy.get('h2').contains('Cypress')
  })
})
