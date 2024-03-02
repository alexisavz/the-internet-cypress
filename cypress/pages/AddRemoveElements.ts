class AddRemovePage{

    elements = {
        title: () => cy.get('h3'),
        addButton: () => cy.get('.example button:contains("Add Element")'),
        deleteButtonContainer: () => cy.get('.example #elements')
    }

    addElement(){
        this.elements.addButton().click()
    }

    checkLength(num){
        this.elements.deleteButtonContainer().children().should('have.length', num)
    }

    addBulk(num){
        for(let i =0; i<num; i++){
            this.elements.addButton().click()
        }
    }

    removeBulk(num){
        for(let i = 0; i< num; i++){
            this.elements.deleteButtonContainer().children().first().click()
        }
    }
}

export default new AddRemovePage