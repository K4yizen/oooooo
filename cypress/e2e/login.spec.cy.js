describe("Authentification sur Back Market", () => {
  it("Authentification réussie", () => {
    cy.visit("https://preprod.backmarket.fr/login");
    cy.get('#signin-email').type("john.doe@example.com");
    cy.get('#signin-password').type("MotDePasse123");
    cy.get('[type="submit"]').click();
  });

  it("Authentification échouée", () => {
    cy.visit("https://preprod.backmarket.fr/login");
    cy.get('[type="submit"]').click();
  });
});
