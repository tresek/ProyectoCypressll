'use strict'

describe('Pruebas de Login', () => {
    
    it('Debe cargar el Login', () =>{
        cy.visit('https://www.facebook.com')
        cy.wait(2000)
        cy.screenshot('inicio')
    })

      
    it.skip('Login Erroneo',() =>{ // con la instruccion .skip se pueden saltar los casos 
        cy.get('[data-testid=royal_email]').type('fescon')
        cy.get('[data-testid=royal_pass]').type('Aabb123456')
        cy.contains('Iniciar sesión').click() // con contains se puede buscar el elemento por el nombre
        cy.get('._4rbf').should('be.visible')
        cy.wait(4000)
        cy.visit()
        cy.screenshot('Usuario erroneo')
        
    })
    

    it('Ingresar a Login',() =>{
        cy.get('[data-testid=royal_email]').type('fesconetwork@gmail')
        cy.get('[data-testid=royal_pass]').type('Aabb123456')
        cy.contains('Iniciar sesión').click() // con contains se puede buscar el elemento por el nombre
        cy.get('._4rbf').should('not.exist')
        cy.wait(6000)
        cy.screenshot('Usuario Ingresado')
        
    })
    

    it.skip('Cerrar Sesion',() => {
        cy.get('#userNavigationLabel').click()
        cy.wait(8000)
        cy.get('._64kz > ._54nc > :nth-child(1) > ._54nh').click()
        cy.wait(8000)
        cy.screenshot('Cerrar Sesion')
    })
    
} )