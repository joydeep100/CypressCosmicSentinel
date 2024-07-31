describe('Oasis UA Application', () => {
  // Define a session to log in using the altAuth header
  beforeEach(() => {
      cy.session('login', () => {
          cy.request({
              method: 'GET',
              url: 'https://oasis-ua.corp.equinix.com/login',
              headers: {
                  'altAuth': '<replace with key>'
              }
          }).then((response) => {
              // Optionally, you can perform assertions on the response
              expect(response.status).to.eq(200);
          });
      });
  });

  it('Navigates to the client management page', () => {
      // Visit the client management page
      cy.visit('https://oasis-ua.corp.equinix.com/mgmt/client/');
      
      // Optionally, you can add assertions to verify the page
      cy.contains('Client Management').should('be.visible');
  });

  it('Navigates to the admin page', () => {
      // Visit the admin page
      cy.visit('https://oasis-ua.corp.equinix.com/admin/');
      
      // Optionally, you can add assertions to verify the page
      cy.contains('Admin').should('be.visible');
  });
});
