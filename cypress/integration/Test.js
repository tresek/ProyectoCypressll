'use strict' 

describe('Pruebas de Login', () => {
    beforeEach(() =>{ // Esto indica que esta intruccion, se ejecutará antes que corra cada Test
        cy.fixture('user.json').as('userData') // Se crea Alias json en la carpeta fixture con nombre user. Y luego se crea un alias "userData"
        cy.visit('https://www.facebook.com')
        cy.wait(2000)
        cy.screenshot('inicio')
    })
    
      
    it.skip('Login Erroneo',() =>{ // con la instruccion .skip se pueden saltar los casos 
        cy.get('@userData').then((userData)=>{
            cy.get('[data-testid=royal_email]').type(userData.name)
            cy.get('[data-testid=royal_pass]').type(userData.password)
            cy.contains('Iniciar sesión').click() // Con contains se puede buscar el elemento por el nombre
            cy.get('._4rbf').should('be.visible') // Se prueba usuario incorrecto. Si aparece mensaje de error el caso esta OK!
            cy.wait(4000)
            cy.screenshot('Usuario erroneo')
             
        })
           
    })
    
    it('Ingresar a Login',() =>{
        cy.get('@userData').then((userData) =>{
           cy.loginUser(userData.name, userData.password) // Se crea un command en support/commands con el nombre loginUser 
            
        })
        
    })
    

    it.skip('Cerrar Sesion',() => {
        cy.get('#userNavigationLabel').click()
        cy.wait(8000)
        cy.get('._64kz > ._54nc > :nth-child(1) > ._54nh').click()
        cy.wait(8000)
        cy.screenshot('Cerrar Sesion')
    })
    
} )