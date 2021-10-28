describe("Test The Cypress", function () {
  // Without this function only the first test will work.
  beforeEach(() =>{
    Cypress.Cookies.preserveOnce('session_id', 'remember_token')
    //Cypress.Cookies.preserveOnce("laravel_session", "XSRF-TOKEN");
    cy.on("uncaught:exception", (err) => {
      expect(err.message).to.include("Ignoring error for now");
      return false;
    });
  });

  it("Signin Lambdatest Product", function () {
    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')
    cy.wait(2000)
    cy.visit(Cypress.env("baseUrl"));
    cy.wait(2000)
    cy.get("#email").click();
    cy.wait(2000)
    cy.get("#email").type("7st60cx9us@esiix.com");
    cy.wait(2000)
    cy.get("#password").type("Asad#123");
    cy.wait(2000);
    cy.get("#login-button").click();
    cy.wait(2000);
    
   });

  it("go to Automation Logs", function () {
    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')
    cy.get("#automation__ui").click();
    cy.wait(2000);
    // cy.get("#Automation Logs").click();
    // cy.wait(2000);


  });

  it("Verify command log", function () {
    //Cypress.Cookies.preserveOnce('session_id', 'remember_token')
    cy.visit("https://automation.lambdatest.com/logs/?testID=+SESSION");
    
  });
});