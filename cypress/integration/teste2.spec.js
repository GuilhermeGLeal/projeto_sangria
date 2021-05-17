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

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) 
    {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) 
        {
            var tarr = [];
            for (var j=0; j<headers.length; j++) 
            {
                tarr.push(headers[j]+":"+data[j]);
            }
            //alert(tarr);
            lines.push(tarr);
        }
    } 
    return lines;
}

describe('Teste',()=>{

    let CSV;
    let CSVA=[];
    beforeEach(()=>{
        cy.fixture('teste.csv').then(
        (Exemplo)=>
        {
            cy.intercept('GET','/teste.csv',Exemplo);
            CSV=Exemplo;
        })
        
    })

    it('',()=>
    {     
        CSVA=processData(CSV);
        // caixa aberto
        cy.get('input[name=caixa_fechamento]').should("have.value", "")

        // sangria
        cy.get('input[name=caixa_valorfinal]')
        expect(1500).to.be.greaterThan(0)
    })
})