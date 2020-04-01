describe('Start Timer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/timer')

    cy.get('div > img[name="playButton"]').click()
  })

  it('timer start to countdown', () => {
    cy.get('h2').contains('25:00')
    cy.wait(1000)
    cy.get('h2').contains('24:59')
    cy.wait(1000)
    cy.get('h2').contains('24:58')
  })

  it('stop button appears', () => {
    cy.get('div > img[name="stopButton"]')
  })

  it('renders todo, sound and settings icon', () => {
    cy.get('img[name="todoIcon"]')
    cy.get('img[name="soundOnIcon"]')
    cy.get('img[name="settingsIcon"]')
  })

  //   it('music is playing', () => {
  //     cy.get('audio').should('be.playingAudio')
  //   })
})
