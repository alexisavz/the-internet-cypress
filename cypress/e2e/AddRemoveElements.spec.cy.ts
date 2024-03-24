import { should } from "chai"
import AddRemovePage from "../pages/AddRemoveElements"

describe("Add/Remove Elements Page", () => {

    beforeEach(() => {
        cy.visit('/add_remove_elements/')
    })

    it('Add/Remove elements', () => {

        const bulk = 40;

        //Check the title of the page
        AddRemovePage.elements.title().should('have.text', 'Add/Remove Elements')

        //Check if the Add button is visible
        AddRemovePage.elements.addButton().should('be.visible')

        //Check that there are no delete buttons
        AddRemovePage.checkLength(0)

        //Add one item, and check if button has appeared
        AddRemovePage.addElement()
        AddRemovePage.checkLength(1)

        //Delete one item and check if no buttons are present
        AddRemovePage.elements.deleteButtonContainer().children().first().click()
        AddRemovePage.checkLength(0)

        //Add n items
        AddRemovePage.addBulk(bulk)
        AddRemovePage.checkLength(bulk)
        AddRemovePage.removeBulk(bulk)
        AddRemovePage.checkLength(0)

    })
})