describe("Network issues", () => {
  it("Handles API breakdown gracefully", () => {
    console.log(Cypress.env("UNSPLASH_TOPICS"));
    cy.intercept(
      {
        hostname: Cypress.env("UNSPLASH_HOST"),
        pathname: Cypress.env("UNSPLASH_TOPICS"),
      },
      {
        statusCode: 500,
        body: [],
      }
    );
    cy.visit("/");
    cy.get("button").contains("Choose topic").click();
    cy.contains("Loading...");
    cy.wait(7000); // Default React query retries is 3. Default retry delay is 1000 ms. With exponential backoff, that's 1 + 2 + 4 = 7 seconds.
    cy.contains("Error loading topics");
  });
});
