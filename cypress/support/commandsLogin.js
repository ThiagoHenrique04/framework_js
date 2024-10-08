/// <reference types="cypress"/>
import loc from "./locators"

Cypress.Commands.add('loginComSucesso', (user, password) => {
    cy.get(loc.LOGIN.USER).type(user)
    cy.get(loc.LOGIN.PASSWORD).type(password)
    cy.get(loc.LOGIN.BTN).click()
    cy.url().should('include', '/inventory.html')
    cy.get(loc.MENU.LOGO).should("be.visible")
})

Cypress.Commands.add('loginSemPreencherUsername', (password) => {
    cy.get(loc.LOGIN.PASSWORD).type(password)
    cy.get(loc.LOGIN.BTN).click()
    cy.get(loc.LOGIN.MSG_ERRO).should('be.visible')
    cy.get(loc.LOGIN.MSG_ERRO).should('include.text', 'Username is required')
})

Cypress.Commands.add('loginSemPreencherPassword', (user) => {
    cy.get(loc.LOGIN.USER).type(user)
    cy.get(loc.LOGIN.BTN).click()
    cy.get(loc.LOGIN.MSG_ERRO).should('be.visible')
    cy.get(loc.LOGIN.MSG_ERRO).should('include.text', 'Password is required')    
})

Cypress.Commands.add('loginComUsernameBloqueado', (user, password) => {
    cy.get(loc.LOGIN.USER).type(user)
    cy.get(loc.LOGIN.PASSWORD).type(password)
    cy.get(loc.LOGIN.BTN).click()
    cy.get(loc.LOGIN.MSG_ERRO).should('be.visible')
    cy.get(loc.LOGIN.MSG_ERRO).should('include.text', 'Sorry, this user has been locked out.')  
})

Cypress.Commands.add('loginComUsernameInvalido', (user, password) => {
    cy.get(loc.LOGIN.USER).type(user)
    cy.get(loc.LOGIN.PASSWORD).type(password)
    cy.get(loc.LOGIN.BTN).click()
    cy.get(loc.LOGIN.MSG_ERRO).should('be.visible')
    cy.get(loc.LOGIN.MSG_ERRO).should('include.text', 'Username and password do not match any user in this service') 
})

Cypress.Commands.add('loginComPasswordInvalido', (user, password) => {
    cy.get(loc.LOGIN.USER).type(user)
    cy.get(loc.LOGIN.PASSWORD).type(password)
    cy.get(loc.LOGIN.BTN).click()
    cy.get(loc.LOGIN.MSG_ERRO).should('be.visible')
    cy.get(loc.LOGIN.MSG_ERRO).should('include.text', 'Username and password do not match any user in this service') 
})