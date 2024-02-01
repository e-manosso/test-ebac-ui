/// <reference types="cypress"/>

describe('Funcionalidade pagina de produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(2)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 2

        cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produtos ao carrinho - Usando Comandos Customizados', () => {
        var quantidade1 = 5
        cy.addProdutos('Abominable Hoodie','XL','Green',quantidade1)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade1)
        cy.get('.woocommerce-message').should('contain', quantidade1 + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produtos ao carrinho - Usando Comandos Customizados', () => {
        var quantidade2 = 2
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt','L','Green',quantidade2)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade2)
        cy.get('.woocommerce-message').should('contain', quantidade2 + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });
});
