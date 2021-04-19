// describe('Caixa aberto',()=>{
//     it('Verificar se o caixa está aberto',()=>{
//         expect(true).to.equal(true)
//     })
// })

// get vai buscar qualquer componente com determinado name
// enquanto contains vai buscar  em tela

// describe('Caixa aberto',()=>{
//     it('Verificar se o caixa está aberto',()=>{
//         cy.visit('http://localhost:1024')
//         cy.contains('Sangria')
//     })
// })

// cypress/integration/spec.js

beforeEach(()=> cy.visit('/'))

describe('Teste',()=>{
    it('',()=>{
        cy.fixture('teste').as('testeCSV')

        // caixa aberto
        cy.get('input[name=caixa_fechamento]').should("have.value", "")

        // sangria
        cy.get('input[name=caixa_valorfinal]')
        expect(1500).to.be.greaterThan(0)
    })
})