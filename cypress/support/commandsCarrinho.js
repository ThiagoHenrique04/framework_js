/// <reference types="cypress"/>

import loc from "./locators"

Cypress.Commands.add('addProdutoNoCarrinho', () => {
    cy.get(loc.HOME.PRODUCT_NAME).first().invoke('text').then((productName) => {
    cy.get(loc.HOME.ADD_PRODUCT_CART).first().click()
    cy.get(loc.MENU.BTN_CARRINHO).click()
    cy.get(loc.CARRINHO.PRODUCT_NAME_IN_CART).should('have.text', productName)
    })
})


Cypress.Commands.add('removerProdutosDoCarrinho', () => {
    cy.get(loc.HOME.PRODUCT).first().find(loc.HOME.ADD_PRODUCT_CART).click()
    cy.get(loc.CARRINHO.SHOPPING_CART_STAMP).should('exist')
    cy.get(loc.HOME.PRODUCT).first().find(loc.HOME.REMOVE_PRODUCT_CART).click()
    cy.get(loc.CARRINHO.SHOPPING_CART_STAMP).should('not.exist')
    cy.get(loc.MENU.BTN_CARRINHO).click()
})


Cypress.Commands.add('adicionarMutiplosProdutosNoCarrinho', () => {
    cy.get(loc.HOME.PRODUCT_NAME).eq(0).invoke('text').then((productName1) => {
    cy.get(loc.HOME.PRODUCT_NAME).eq(1).invoke('text').then((productName2) => {
            
    cy.get(loc.HOME.PRODUCT).eq(0).find('.btn_primary').click()
    cy.get(loc.CARRINHO.SHOPPING_CART_STAMP).should('have.text', '1')

    cy.get(loc.HOME.PRODUCT).eq(1).find('.btn_primary').click()
    cy.get(loc.CARRINHO.SHOPPING_CART_STAMP).should('have.text', '2')

    cy.get(loc.MENU.BTN_CARRINHO).click()
    cy.get(loc.CARRINHO.PRODUCT_NAME_IN_CART).should('have.length', '2')
    cy.get(loc.CARRINHO.PRODUCT_NAME_IN_CART).eq(0).should('have.text', productName1)
    cy.get(loc.CARRINHO.PRODUCT_NAME_IN_CART).eq(1).should('have.text', productName2)
        
})
})
})

Cypress.Commands.add('deveCalcularPreçoTotalCorretamente', () => {
cy.get(loc.CARRINHO.CHECKOUT_BTN).click()
cy.get(loc.CHECKOUT.FIRT_NAME_FIELD).type('Thiago')
cy.get(loc.CHECKOUT.LAST_NAME_FIELD).type('Teste')
cy.get(loc.CHECKOUT.ZIP_CODE_FIELD).type('33133')
cy.get(loc.CHECKOUT.CONTINUE_BTN).click()
cy.get(loc.CHECKOUT.ITEMS_PRICE).then($prices =>{
    const firstItemPrice = parseFloat($prices.eq(0).text().replace('$', ''))
    const secondItemPrice = parseFloat($prices.eq(1).text().replace('$', ''))
    const expectedSubtotal =  firstItemPrice + secondItemPrice;
    // cy.log('Expected Subtotal:', expectedSubtotal)
    cy.wrap(expectedSubtotal).as('expectedSubtotal')
    cy.get(loc.CHECKOUT.SUBTOTAL_PRICE).should('have.text', `Item total: $${expectedSubtotal}`)

    cy.get(loc.CHECKOUT.TAX_PRICE).invoke('text').then(taxText => {
        const tax = parseFloat(taxText.replace('Tax: $', ''))

        const expectedTotal = expectedSubtotal + tax;

    cy.get(loc.CHECKOUT.TOTAL_PRICE).invoke('text').then(totalText => {
    const actualTotal = parseFloat(totalText.replace('Total: $', ''))
    expect(actualTotal).to.be.closeTo(expectedTotal, 0.01)
    })

})
})
})

Cypress.Commands.add('realizarCompraDoProduto', () => {
    cy.get(loc.HOME.PRODUCT_NAME).first().invoke('text').then((productName) => {
        cy.get(loc.HOME.ADD_PRODUCT_CART).first().click()
        cy.get(loc.MENU.BTN_CARRINHO).click()
        cy.get(loc.CARRINHO.PRODUCT_NAME_IN_CART).should('have.text', productName)
        cy.get(loc.CARRINHO.CHECKOUT_BTN).click()
    cy.get(loc.CHECKOUT.FIRT_NAME_FIELD).type('Thiago')
    cy.get(loc.CHECKOUT.LAST_NAME_FIELD).type('Teste')
    cy.get(loc.CHECKOUT.ZIP_CODE_FIELD).type('33133')
    cy.get(loc.CHECKOUT.CONTINUE_BTN).click()
    cy.get(loc.CHECKOUT.FINISH_BTN).click()
    cy.get(loc.CHECKOUT.MSG_SUCCESS).should('contain', 'THANK YOU FOR YOUR ORDER')

})
})