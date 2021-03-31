module.exports.carregarCaixa = async function(app, req, res) {

    const connection = app.config.dbConnection();
    const caixaDAL = new app.app.models.CaixaDAL(connection)
    const caixaAtual = await caixaDAL.getCaixa();
   
  
    res.render('home/principal', {caixa: caixaAtual, validacao: {}})
}