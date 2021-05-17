beforeEach(()=> cy.visit('/'))

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
        console.log(CSVA)

        CSVA.forEach(element => {
            let caixa = element[0].split(":")
            let saldo = element[1].split(":")
            let valor = element[2].split(":")
            let tipo = element[3].split(":")
            let motivo = element[4].split(":")
            let resultado  = element[5].split(":")

            // caixa aberto
            if(caixa[1] === "VERDADEIRO")
                cy.get('input[name=caixa_fechamento]').should("have.value", "")
            
            if(tipo[1] === "Sangria") {
                cy.get('select[name=tipo]').select(tipo[1])
                cy.get('input[name=valor]').type(parseFloat(valor[1]))
                // expect(parseFloat(valor[1])).to.be.lessThan(parseFloat(saldo[1]))

                cy.get('textarea').type(motivo[1])
                assert.isNotEmpty('textarea', 'vazio')
            }
        });

        // caixa aberto
        cy.get('input[name=caixa_fechamento]').should("have.value", "")

        // sangria
        cy.get('input[name=caixa_valorfinal]')
        expect(1500).to.be.greaterThan(0)
    })
})