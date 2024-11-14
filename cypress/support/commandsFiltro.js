/// <reference types="cypress"/>

import loc from "./locators"

Cypress.Commands.add('filtroProdutosMaisCaroAoMaisBarato', () => {
    cy.get(loc.HOME.FILTRO).select('hilo')
    cy.get(loc.HOME.PRODUCT_PRICE).then(($prices) => {

        const prices = [...$prices].map((price) => parseFloat(price.innerText.replace('$', '')))
        const sortedPrices = [...prices].sort((a, b) => b - a);
        expect(prices).to.deep.equal(sortedPrices)
    })
})

Cypress.Commands.add('filtroProdutosMaisBaratoAoCaro', () => {
    cy.get(loc.HOME.FILTRO).select('lohi')
    cy.get(loc.HOME.PRODUCT_PRICE).then(($prices) => {

        const prices = [...$prices].map((price) => parseFloat(price.innerText.replace('$', '')))
        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).to.deep.equal(sortedPrices)
    })
})

Cypress.Commands.add('fitlroProdutosAZ', () => {
    cy.get(loc.HOME.FILTRO).select('az')
    cy.get(loc.HOME.PRODUCT_NAME).then(($names) => {
        
        const names = [...$names].map((names) => names.innerText)
        const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
        expect(names).to.deep.eq(sortedNames)
    })
    
})


Cypress.Commands.add('fitlroProdutosZA', () => {
  cy.get(loc.HOME.FILTRO).select('za')
  cy.get(loc.HOME.PRODUCT_NAME).then(($names) => {

    const names = [...$names].map((names) => names.innerText)
    const sortedNames = [...names].sort((a,b) => b.localeCompare(a))

    expect(names).to.deep.eq(sortedNames)
})
    })