import HomePage from "../pages/HomePage";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("passes", () => {
    //Match the title of the page.
    HomePage.elements.title().should("have.text", "Welcome to the-internet");

    //Check the subtitle.
    HomePage.elements.subtitle().should("have.text", "Available Examples");

    //Check that the list contains more than one li element.
    HomePage.elements.list().within(() => {
      cy.get("li").should("exist");
      cy.get("li").should("have.length.greaterThan", 0);
    });

    //Another way to test this is:
    HomePage.elements.list().children("li").should("exist");
  });
});
