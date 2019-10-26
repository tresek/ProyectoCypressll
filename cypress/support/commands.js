// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('loginUser', (name, password)=>{
    cy.get('[data-testid=royal_email]').type(name)
    cy.get('[data-testid=royal_pass]').type(password)
    cy.contains('Iniciar sesión').click() // con contains se puede buscar el elemento por el nombre
    cy.get('._4rbf').should('not.exist')
    cy.wait(6000)
    cy.screenshot('Usuario Ingresado')
})