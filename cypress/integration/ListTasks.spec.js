// ListTasks.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
it('should have a list of tasks  ' , () => {
	cy.visit('http://localhost:3000')
	cy.contains('Task Zero')
	cy.contains('Task One')
})