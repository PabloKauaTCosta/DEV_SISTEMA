describe('Teste completo', () => {
    it('Cenário de teste completo', () => {
        
        cy.visit("https://estudante-2019.github.io/sisteminha2/")
        
        cy.wait(500)

        cy.get('#nome1').type('Pablo')
        cy.get('#email1').type('pablo@senai.com')
        cy.contains('Salvar').click()
        
        cy.get('#nome1').clear().type('Maria')
        cy.get('#email1').clear().type('maria@senai.com')
        cy.contains('Salvar').click()

        cy.get('#nome1').clear().type('Isa')
        cy.get('#email1').clear().type('isa@senai.com')
        cy.contains('Salvar').click()

        cy.get('#nome1').clear().type('Lorenzo')
        cy.get('#email1').clear().type('lorenzo@senai.com')
        cy.contains('Salvar').click()

        cy.wait(1000)

        cy.contains('Soma').click()

        cy.get('#n1').type('1')
        cy.get('#n2').type('1')
        cy.contains('Calcular').click()

        cy.wait(1000)

        cy.get('#n1').clear().type('10')
        cy.get('#n2').clear().type('10')
        cy.contains('Calcular').click()

        cy.wait(1000)

        cy.get('#n1').clear().type('30')
        cy.get('#n2').clear().type('30')
        cy.contains('Calcular').click()

        cy.wait(1000)

        cy.get('#n1').clear().type('40')
        cy.get('#n2').clear().type('40')
        cy.contains('Calcular').click()

        cy.wait(1000)

        cy.get('#n1').clear()
        cy.get('#n2').clear()
        cy.contains('Calcular').click()

        cy.wait(1000)

        cy.contains('IMC').click()

        cy.get('#peso').type('50')
        cy.get('#altura').type('1.64')
        cy.contains('Calcular').click()

        cy.wait(1000)

        cy.get('#peso').clear().type('96')
        cy.get('#altura').clear().type('1.66,5')
        cy.contains('Calcular').click()

        cy.wait(1000)

        cy.get('#peso').clear().type('88')
        cy.get('#altura').clear().type('1.77')
        cy.contains('Calcular').click()

        cy.wait(1000)

        cy.get('#peso').clear().type('80')
        cy.get('#altura').clear().type('1.86')
        cy.contains('Calcular').click()
    });
});