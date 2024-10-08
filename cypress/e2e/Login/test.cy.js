/// <reference types="cypress"/>

import loc from "../../support/locators"
import "../../support/commandsLogin"

describe('Testes Funcionalidade Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
  });

    it('Login com sucesso', () => {
     cy.loginComSucesso('standard_user', 'secret_sauce')
    });

    it('Login sem Preencher Username', () => {
      cy.loginSemPreencherUsername('secret_sauce')
    })

    it('Login sem Preencher Password', () => {
      cy.loginSemPreencherPassword('standard_user')
    })

    it('Login com Username Bloqueado', () => {
      cy.loginComUsernameBloqueado('locked_out_user', 'secret_sauce')
    })

    it('Login com Username Invalido', () => {
      cy.loginComUsernameInvalido('standard', 'secret_sauce')
     });

     it('Login com Password Invalido', () => {
      cy.loginComPasswordInvalido('standard_user', 'secret')
     });
  });
  