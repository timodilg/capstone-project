describe('Stop Timer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/timer')
    cy.get('div > img[name="playButton"]').click()
    cy.wait(1000)
    cy.get('div > img[name="stopButton"]').click()
  })

  it('timer stops countdown', () => {
    cy.get('h2').contains('24:59')
    cy.wait(2000)
    cy.get('h2').contains('24:59')
  })

  it('play and finish buttons appear', () => {
    cy.get('div > img[name="playButton"]')
    cy.get('div > img[name="finishButton"]')
  })

  it('timer continues to count down', () => {
    cy.get('div > img[name="playButton"]').click()
    cy.wait(1000)
    cy.get('h2').contains('24:58')
    cy.wait(1000)
    cy.get('h2').contains('24:57')
  })

  it('renders todo, sound and settings icon', () => {
    cy.get('img[name="todoIcon"]')
    cy.get('img[name="soundOnIcon"]')
    cy.get('img[name="settingsIcon"]')
  })
})
