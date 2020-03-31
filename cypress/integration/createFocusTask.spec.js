describe('Create a focus task', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/todo')
    cy.get('input[name="todo-input"]').type('Geschirr abwaschen')
    cy.get('form > button').click()
    cy.get('img[name="timerIcon"]').click()
  })

  it('focus task renders on timer page', () => {
    cy.get('span[name="focusTask"]').contains('Geschirr abwaschen')
  })

  it('focus task disappears on timer page if clicked', () => {
    cy.get('span[name="focusTask"]').contains('Geschirr abwaschen')
    cy.wait(1000)
    cy.get('span[name="focusTask"]')
      .contains('Geschirr abwaschen')
      .click()
    cy.get('span[name="focusTask"]').should('not.exist')
  })

  it('focus task disappears on todo page if clicked on timer page', () => {
    cy.get('span[name="focusTask"]').contains('Geschirr abwaschen')
    cy.wait(1000)
    cy.get('span[name="focusTask"]')
      .contains('Geschirr abwaschen')
      .click()
    cy.visit('http://localhost:3000/todo')

    cy.get('ul[class^="List__UlStyled-sc-7bv59l-0 cgncly"] > li').should(
      'not.exist'
    )
  })
})
