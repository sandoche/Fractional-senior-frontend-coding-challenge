/* eslint-disable */
describe('Favourites test', () => {
  it('Clicks on the first star button and check if the coins appears in the favourites page', () => {
    cy.visit('http://localhost:3000')
    cy.get('.star:first').click()

    cy.get('.name:first').then(($name) => {
      const name = $name.text()
      cy.visit('http://localhost:3000/favourites')
      cy.get('.name').contains(name)
    })
  })
})
