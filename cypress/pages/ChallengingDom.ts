class ChallengingDom {

    elements = {
        title: () => cy.get("h3"),

    }


    findButtonByColor(color){
        return cy.get('a.button').filter((index, element) => {
            const background = Cypress.$(element).css('background-color')
            return background == color
        })
    }

    checkColumnElement(column, element){
        let position = -1;
        let hit = false;
        cy.get("table thead tr th").should("have.length", 7).then(($ths) => {
            $ths.each((index, th) => {
                const header = Cypress.$(th).text().trim();
                if (header == column) {
                    position = index;
                    return false;
                }
            });

            if (position == -1) {
                throw new Error(`Header ${column} is not present on the table position ${position}`);
            }

            cy.get('table tbody tr').then(($trs) => {
                $trs.each((index, tr) => {
                    const value = Cypress.$(tr).find(`td:nth-child(${position + 1})`).text().trim()
                    if(value == element){
                        hit = true
                        return false
                    }
                })

                if(hit === false){
                    throw new Error(`Element ${element} does not exist in colum ${column}`)
                }
            })
        });
    }

}

export default new ChallengingDom()