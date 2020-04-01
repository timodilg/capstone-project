describe('Start break timer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/timer')
    cy.get('div > img[name="playButton"]').click()
    cy.wait(1000)
    cy.get('div > img[name="stopButton"]').click()
    cy.get('div > img[name="finishButton"]').click()
    cy.get('div > img[name="breakButton"]').click()
  })

  it('break timer starts to count down', () => {
    cy.get('h2').contains('5:00')
    cy.wait(1000)
    cy.get('h2').contains('4:59')
    cy.wait(1000)
    cy.get('h2').contains('4:58')
  })

  it('stop button appears', () => {
    cy.get('div > img[name="stopButton"]')
  })

  it('timer appears if click on stop button', () => {
    cy.get('div > img[name="stopButton"]').click()
    cy.get('h2').contains('25:00')
  })

  it('renders todo, sound and settings icon', () => {
    cy.get('img[name="todoIcon"]')
    cy.get('img[name="soundOnIcon"]')
    cy.get('img[name="settingsIcon"]')
  })
})
