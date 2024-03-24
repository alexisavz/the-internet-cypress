
describe('Context Menu Page', () => {

    beforeEach(() => {
        cy.visit('/context_menu')
    })


    it('Menu Context Test', () => {
        //Get the title of the site
        cy.get('h3')

        //Right click on the hot-spot
        cy.get('#hot-spot').rightclick('center')

        //Context menu should open
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`You selected a context menu`)
          })
    })
})