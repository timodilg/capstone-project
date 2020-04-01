describe('Finish Timer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/timer')
    cy.get('div > img[name="playButton"]').click()
    cy.wait(1000)
    cy.get('div > img[name="stopButton"]').click()
    cy.get('div > img[name="finishButton"]').click()
  })

  it('break time appears', () => {
    cy.get('h2').contains('5:00')
  })

  it('break button appears', () => {
    cy.get('img[name="breakButton"]')
  })

  it('break message appears', () => {
    cy.get('p').contains('Take a break!')
  })

  it('renders todo, sound and settings icon', () => {
    cy.get('img[name="todoIcon"]')
    cy.get('img[name="soundOnIcon"]')
    cy.get('img[name="settingsIcon"]')
  })
})
