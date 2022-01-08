describe('DevBook Application', () => {
    it('Visits the DevBook', () => {
        cy.visit('http://localhost:3000/');
        cy.get('h2[data-test="heading"]').contains('DevBook')
    })
})