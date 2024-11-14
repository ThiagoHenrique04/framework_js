/// <reference types="cypress"/>
import "../../support/commandsLogin"
import "../../support/commandsFiltro"

describe('Testes Funcionalidade Filtros', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.loginComSucesso('standard_user', 'secret_sauce')
      });

      it('Deve classificar os produtos do preço alto para o preço baixo', () => {
        cy.filtroProdutosMaisCaroAoMaisBarato()

      })

      it('Deve classificar os produtos do preço baixo para o preço alto', () => {
        cy.filtroProdutosMaisBaratoAoCaro()
      })

      it('Deve classificar os produtos do A ao Z', () => {
        cy.fitlroProdutosAZ()
      })

      it.only('Deve classificar os produtos do Z ao A', () => {
        cy.fitlroProdutosZA()
      })
})