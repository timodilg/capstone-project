describe('Create a todo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/todo')

    cy.get('input[name="todo-input"]').type('Geschirr abwaschen')

    cy.get('form > button').click()
  })

  it('clears all form fields after creation', () => {
    cy.get('input[name="todo-input"]').should('be.empty')
  })

  it('renders the todo correctly', () => {
    cy.get(
      'ul[class^="List__UlStyled-sc-7bv59l-0 cgncly"] > li > label > span'
    ).contains('Geschirr abwaschen')
  })
})
