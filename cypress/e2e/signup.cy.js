
describe("Inscription sur Back Market", () => {
    it("Inscription réussie", () => {
      cy.visit("https://preprod.backmarket.fr/register");
      cy.get('#firstName').type("John");
      cy.get('#lastName').type("Doe");
      cy.get('#signup-email').type("john.doe@example.com");
      cy.get('#signup-password').type("MotDePasse123");
      cy.get('[name="accepts_emails"]').check();
      cy.get('[type="submit"]').click();
    });
  
    it("Inscription échouée", () => {
      cy.visit("https://preprod.backmarket.fr/register");
      cy.get('[type="submit"]').click();
    });
  });
  