//npm install @faker-js/faker --save-dev  >> dependencias gerar nomes aleatorios
describe('Teste completo Mercado1', () => {
  it('Testa login errado e certo, clientes, produtos, vendas e logout', () => {
    cy.visit('https://estudante-2019.github.io/mercado1/');
    
    // Login errado
    cy.get('#login-username').type('usuarioErrado');
    cy.get('#login-password').type('senhaErrada');
    cy.get('#login-form').submit();
    
    cy.contains('Usuário ou senha incorretos.').should('be.visible');
    cy.wait(500);
    
    // Login certo
    cy.get('#login-username').clear().type('admin');
    cy.get('#login-password').clear().type('1234');
    cy.get('#login-form').submit();
    
    cy.get('#dashboard').should('be.visible');
    
    // Criar 10 clientes
    function randomString(length) {
      return Math.random().toString(36).substring(2, 2 + length);
    }
    
    for (let i = 1; i <= 10; i++) {
      cy.get('#client-name').clear().type(`Cliente PUDR ${randomString(5)}`);
      cy.get('#client-email').clear().type(`email${randomString(5)}@pudr.com`);
      cy.get('#client-form').submit();
      cy.wait(100);
    }
    
    cy.get('#clients-table-body tr').should('have.length.at.least', 10);
    cy.wait(1000);
    
    // Excluir 4 clientes
    for (let i = 0; i < 4; i++) {
      cy.get('#clients-table-body tr').eq(i).find('.client-delete-btn').click();
      cy.wait(200);
    }
    cy.get('#clients-table-body tr').should('have.length.at.least', 6);
    
    // Produtos
    cy.get('#tab-products').click();
    
    for (let i = 1; i <= 10; i++) {
      cy.get('#product-name').clear().type(`Produto PUDR ${randomString(5)}`);
      cy.get('#product-price').clear().type((Math.random() * 100 + 1).toFixed(2));
      cy.get('#product-form').submit();
      cy.wait(100);
    }
    
    cy.get('#products-table-body tr').should('have.length.at.least', 10);
    
    // Excluir 4 produtos
    for (let i = 0; i < 4; i++) {
      cy.get('#products-table-body tr').eq(i).find('.product-delete-btn').click();
      cy.wait(200);
    }
    cy.get('#products-table-body tr').should('have.length.at.least', 6);
    
    // Vendas
    cy.get('#tab-sales').click();
    
    for (let i = 0; i < 5; i++) {
      cy.get('#sale-client option').its('length').then(clientCount => {
        const clientIndex = Math.floor(Math.random() * (clientCount - 1)) + 1;
        
        cy.get('#sale-product option').its('length').then(productCount => {
          const productIndex = Math.floor(Math.random() * (productCount - 1)) + 1;
          
          cy.get('#sale-client').select(clientIndex);
          cy.get('#sale-product').select(productIndex);
          
          const qty = Math.floor(Math.random() * 5) + 1;
          cy.get('#sale-quantity').clear().type(qty.toString());
          
          cy.get('#sale-form').submit();
          
          cy.wait(200);
        });
      });
    }
    
    cy.get('#sales-table-body tr').should('have.length.at.least', 5);
    
    cy.wait(5000);
    
    // Logout
    cy.get('#logout-btn').click();
    
    cy.get('#login-section').should('be.visible');
  });
});