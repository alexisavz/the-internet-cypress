import ChallengingDom from "../pages/ChallengingDom";

describe("Challenging DOM Page", () => {
  beforeEach(() => {
    cy.visit("/challenging_dom");
  });

  it("Find elements inside of the dom", () => {
        ChallengingDom.elements.title().should("exist"); //Find the title of the site.

        ChallengingDom.findButtonByColor("rgb(43, 166, 203)").should(
        "have.length",
        1
        ); //Find light-blue button.
        ChallengingDom.findButtonByColor("rgb(198, 15, 19)").should(
        "have.length",
        1
        ); //Find red button.
        ChallengingDom.findButtonByColor("rgb(93, 164, 35)").should(
        "have.length",
        1
        ); //Find green button.

        //Check if element exists on the table
        cy.get("table").contains("Apeirian7").should("be.visible");

        //Check for element under specific column.
        ChallengingDom.checkColumnElement('Dolor','Adipisci5');
        ChallengingDom.checkColumnElement('Lorem','Iuvaret3');


    });
});
