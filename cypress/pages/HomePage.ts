class HomePage {
  elements = {
    title: () => cy.get("h1"),
    subtitle: () => cy.get("h2"),
    list: () => cy.get("ul"),
  };
}

export default new HomePage();
