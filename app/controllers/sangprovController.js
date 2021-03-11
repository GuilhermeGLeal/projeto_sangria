module.exports.salvarSangria = function(app, req ,res){

    let form = req.body;
    let caixa_id = form.caixa.caixa_id
    // verificar dados
     // verificar caixa

    const connection = app.config.dbconnection(); 
    const caixaDAL = new app.app.models.CaixaDAL(connection)
    const MovCaixaDAL = new app.app.models.MovCaixaDAL(connection)
    const SangProvDAL = new app.app.models.SangProvDAL(connection)
    
    caixaDAL.atualizarSaldo(caixa_id, 1500)
    SangProvDAL.insert(form)
    MovCaixaDAL.insert(caixa_id)
    
}