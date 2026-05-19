describe('Teste completo', () => {
    it('Cenário de teste completo', () => {
        
        cy.visit("https://estudante-2019.github.io/login1/")
        
        cy.wait(500)
        
        cy.get('.link').eq(0).click()
        
        cy.get('#createEmail').type('pk@senai.com')
        cy.get('#createSenha').type('123456')
        cy.get('#registro').click()
        
        cy.wait(500)
        
        cy.get('#loginEmail').type('pk@senai.com')
        cy.get('#loginSenha').type('123456')
        cy.contains('Entrar').click()
    });
});