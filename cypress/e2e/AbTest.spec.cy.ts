import ABTest from "../pages/ABTesting";

describe("AB Testing page automation", () => {
  beforeEach(() => {
    cy.visit("/abtest");
  });

  it("Page loads correctly", () => {
    //Page is able to have one of two titles.
    ABTest.elements.title().should(($element) => {
        const text = $element.text()
        expect(text).to.satisfy((value) => {
            return value == 'A/B Test Control' || value == 'A/B Test Variation 1'
        }, "Title has the expected text")
    })

    //Check if paragraph below text exists.
    ABTest.elements.paragraph().should("be.visible")
  });
});
