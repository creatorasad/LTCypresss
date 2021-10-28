describe('Lambdatest Cypress testing', () => {
    before(() => {

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
    
    })
  
    beforeEach(() => {

      Cypress.Cookies.preserveOnce('session_id', 'remember_token')
      cy.get("#automation__ui").click();
      cy.wait(2000);


    })
  
    it('give the session id in url', () => {
      cy.get('input[name="search"]').type("random1").type('{enter}');
      //cy.type('{enter}')
      cy.reload() 
      cy.wait(10000);
      // cy.get('#build_view_accordion-heading', { timeout: 100000 }).should('be.visible');
      // cy.wait(100000);

      let remainingAttempts = 30;
      function waitUntilTableExists() {
        let $table = Cypress.$('#build_view_accordion-heading');
        if ($table.length) {
            // At least one table tag was found.
            // Return a jQuery object.
            return $table;
        }
    
        if (--remainingAttempts) {
            cy.log('Table not found yet. Remaining attempts: ' + remainingAttempts);
    
            // Requesting the page to reload (F5)
            cy.reload();
    
            // Wait a second for the server to respond and the DOM to be present.
            return cy.wait(1000).then(() => {
                return waitUntilTableExists();
            });
        }
        throw Error('Table was not found.');
    }
    
    waitUntilTableExists().then($table => {
        cy.log('table: ' + $table.text());
    });







      cy.get('a[title*="Automation Logs"]').click();
      cy.wait(10000);
      cy.get('type[button="css-1r4vtzz"]').click();
      cy.wait(10000);
      

      cy.visit("https://automation.lambdatest.com/logs/?testID=remember_token");
    })
  
    it('verify the test is passed', () => {
      // ...
    })
  
    it('opens a modal', () => {
      // ...
    })
  })