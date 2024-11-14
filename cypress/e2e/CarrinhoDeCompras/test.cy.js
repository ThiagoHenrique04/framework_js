/// <reference types="cypress"/>
import "../../support/commandsLogin"
import "../../support/commandsCarrinho"

describe('Testes funcionalidade Carrinho de Compras', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.loginComSucesso('standard_user', 'secret_sauce')
      });

    it('Adicionar Produto no Carrinho', () => {
        cy.addProdutoNoCarrinho()
    })

    it('deve remover um item do carrinho', () => {
        cy.removerProdutosDoCarrinho()
      })

    it('deve adicionar múltiplos itens ao carrinho', () => {
        cy.adicionarMutiplosProdutosNoCarrinho()
})

it('deve calcular o preço total corretamente', () => {
    cy.adicionarMutiplosProdutosNoCarrinho()
    cy.deveCalcularPreçoTotalCorretamente()
})

it('Realizar compra de um produto', () => {
    cy.realizarCompraDoProduto()
})
  
})