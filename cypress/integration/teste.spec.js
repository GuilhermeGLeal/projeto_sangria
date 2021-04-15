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

beforeEach(()=> cy.visit('/'))

describe('Caixa aberto',()=>{
    it('Verificar se o caixa está aberto',()=>{
        
        cy.get('input[name=valor]')
    })
})