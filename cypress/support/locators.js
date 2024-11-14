const locators = {
    LOGIN:{
        USER: '[data-test="username"]',
        PASSWORD: '[data-test="password"]',
        BTN: '#login-button',
        MSG_ERRO: '[data-test="error"]'
    },

    MENU:{
        LOGO: '.peek',
        BTN_CARRINHO: '#shopping_cart_container'
    },

    HOME:{
        FILTRO: '.product_sort_container',
        PRODUCT: '.inventory_item',
        PRODUCT_NAME: '.inventory_item_name',
        ADD_PRODUCT_CART: '.btn_primary',
        REMOVE_PRODUCT_CART: '.btn_secondary',
        PRODUCT_PRICE: '.inventory_item_price'
    },

    CARRINHO: {
        PRODUCT_NAME_IN_CART: '.inventory_item_name',
        SHOPPING_CART_STAMP: '.shopping_cart_badge',
        CHECKOUT_BTN: '.btn_action'
    },

    CHECKOUT: {
    FIRT_NAME_FIELD: '[data-test="firstName"]',
    LAST_NAME_FIELD: '[data-test="lastName"]',
    ZIP_CODE_FIELD: '[data-test="postalCode"]',
    CONTINUE_BTN: '.cart_button',
    ITEMS_PRICE: '.inventory_item_price',
    SUBTOTAL_PRICE: '.summary_subtotal_label',
    TAX_PRICE:'.summary_tax_label',
    TOTAL_PRICE: '.summary_total_label',
    FINISH_BTN: '.btn_action',
    MSG_SUCCESS: '.complete-header'
          },

    FILTRO:{
    
    }
}

export default locators;
