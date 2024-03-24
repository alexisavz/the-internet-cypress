import Checkboxes from "../pages/Checkboxes";

describe("CheckBoxes Page", () => {
    beforeEach(() => {
        cy.visit("/checkboxes");
    });


    it("Test Checkboxes", () => {

        //Get Title
        Checkboxes.elements.title()

        //Check the first element
        cy.get('#checkboxes input').should('have.length', 2).first().check()

        //check if both elements are checked/
        cy.get('#checkboxes input').each(($input, index) => {
            cy.wrap($input).should('be.checked')
        })

        //Uncheck all checkboxes
        cy.get('#checkboxes input').each(($input, index) => {
            cy.wrap($input).uncheck()
        })

        //check if both elements are checked/
        cy.get('#checkboxes input').each(($input, index) => {
            cy.wrap($input).should('not.be.checked')
        })

    });
});
