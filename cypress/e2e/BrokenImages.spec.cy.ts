import BrokenImages from "../pages/BrokenImages";

describe("Test for Broken Images", () => {
  beforeEach(() => {
    cy.visit("/broken_images");
  });

  it("Check for broken images", () => {
    //Check Title.
    BrokenImages.elements.title().should("have.text", "Broken Images");

    const imageInfoArray = [];

    const brokenImages = []; //Array for storing all broken images info.

    //Get all images. And test all of them, afterwards, add the broken ones to the array.
    cy.get(".example img")
      .each(($element, i) => {
        const width = $element.prop("naturalWidth");
        if (width === 0) {
          brokenImages.push(`Image${i + 1} is broken`);
        }
      })
      .then(() => {
        if (brokenImages.length) {
          throw new Error(
            `${brokenImages.length} IMAGES ARE BROKEN: ` +
              brokenImages.join(", ")
          );
        }
      });
  });
});
