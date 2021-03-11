module.exports.carregarCaixa = function(app, req, res) {

    const connection = app.config.dbConnection();
    const caixaDAL = new app.app.models.CaixaDAL(connection)
    const caixaAtual = caixaDAL.getCaixa();

    //console.log(caixaDAL.getCaixa())
    res.render('home/principal', {caixa: caixaAtual, erros: {}})
}