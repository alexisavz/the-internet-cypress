import BasicAuth from "../../pages/BasicAuthPage";

describe("Basic Authentication page functionality", () => {
  it("click on the login button of the authentication form", () => {
    //Login into the page
    cy.visit("/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });

    //Check for the Header that appears once loged in.
    cy.get("h3").should("have.text", "Basic Auth");

    //Check for the text that appears once logged in.
    cy.get(".example p").contains("Congratulations!");
  });
});
