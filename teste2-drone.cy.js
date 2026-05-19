describe('Teste completo', () => {
    it('Cenário de teste completo', () => {
        
        cy.visit("https://estudante-2019.github.io/drone/")
        
        cy.wait(500)
        
        for (let click = 0; click < 17; click++) {
            cy.get('#btnDireita').click()
        };
        
        for (let click = 0; click < 7; click++) {
            cy.get('#btnBaixo').click()
        };
    });
});