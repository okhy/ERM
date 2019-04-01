describe("SearchPage E2E tests", () => {
  test("searching a movie", () => {
    cy.visit("http://localhost:8080");
    cy.contains("input").type("Pulp Fiction");
    cy.contains("search").click();

    // expect(text).toBe("test movie title");
  });
});
