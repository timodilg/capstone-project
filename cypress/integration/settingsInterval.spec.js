describe('Change timer interval on settings page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/settings')
    cy.get('input[name="changeInterval"]').clear()
    cy.get('input[name="changeInterval"]').type('17')
    cy.get('button').click()
  })

  it('new interval appears on timer page', () => {
    cy.get('h2').contains('17:00')
  })

  it('timer starts after click on play button', () => {
    cy.get('div > img[name="playButton"]').click()
    cy.get('h2').contains('17:00')
    cy.wait(1000)
    cy.get('h2').contains('16:59')
    cy.wait(1000)
    cy.get('h2').contains('16:58')
  })

  it('timer stops countdown', () => {
    cy.get('div > img[name="playButton"]').click()
    cy.wait(1000)
    cy.get('div > img[name="stopButton"]').click()
    cy.get('h2').contains('16:59')
    cy.wait(2000)
    cy.get('h2').contains('16:59')
  })
})
