// get vai buscar qualquer componente com determinado name
// enquanto contains vai buscar  em tela

// describe('Caixa aberto',()=>{
//     it('Verificar se o caixa está aberto',()=>{
//         cy.visit('http://localhost:1024')
//         cy.contains('Sangria')
//     })
// })

beforeEach(()=> cy.visit('/'))

// describe('Login to OrangeHRM website', function () {
//     before(function () {
//         cy.visit('https://opensource-demo.orangehrmlive.com/')
//         cy.fixture('testdata').then(function (testdata) {
//             this.testdata = testdata
//         })
//     })

//     it('Validate successful Login', function () {
//         cy.get('#txtUsername').type(this.testdata.username)
//         cy.get('#txtPassword').type(this.testdata.password)
//         cy.get('#btnLogin').click()
//         cy.get('#welcome').contains(this.testdata.welcomeText)
//     })
// })

// cypress test using fixtures

describe('Teste',()=>{

    before(()=>{
        cy.fixture('teste').then(function (teste) {
            this.teste = teste
        })
    })

    it('',()=>{
        // caixa aberto
        cy.get('input[name=caixa_fechamento]').should("have.value", "")

        // sangria
        cy.get('input[name=caixa_valorfinal]')
        expect(1500).to.be.greaterThan(0)
    })
})