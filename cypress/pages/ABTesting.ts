class ABTest {
  elements = {
    title: () => cy.get(".example h3"),
    paragraph: () => cy.get(".example p")
  };
}

export default new ABTest();
