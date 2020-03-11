describe('My First Testcase', () => {
  it('Just a test!', () => {
    cy.visit('http://localhost:3000')
    expect(true).to.equal(true)
  })
})
