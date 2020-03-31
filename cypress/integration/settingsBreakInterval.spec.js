describe('Change break interval on settings page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/settings')
    cy.get('input[name="changeBreak"]').clear()
    cy.get('input[name="changeBreak"]').type('2')
    cy.get('button').click()
    cy.get('div > img[name="playButton"]').click()
    cy.get('div > img[name="stopButton"]').click()
    cy.get('div > img[name="finishButton"]').click()
  })

  it('new interval appears on timer page', () => {
    cy.get('h2').contains('02:00')
  })

  it('break starts after click on break button', () => {
    cy.get('h2').contains('02:00')
    cy.get('div > img[name="breakButton"]').click()
    cy.wait(1000)
    cy.get('h2').contains('01:59')
    cy.wait(1000)
    cy.get('h2').contains('01:58')
  })

  it('stop button appears', () => {
    cy.get('div > img[name="breakButton"]').click()
    cy.get('div > img[name="stopButton"]')
  })

  it('timer appears if click on stop button', () => {
    cy.get('div > img[name="breakButton"]').click()
    cy.get('div > img[name="stopButton"]').click()
    cy.get('h2').contains('25:00')
  })
})
