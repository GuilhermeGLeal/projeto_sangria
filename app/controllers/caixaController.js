module.exports.carregarCaixa = function(app, req ,res){

    const connection = app.config.dbconnection();
    const caixaDAL = new app.app.models.CaixaDAL(connection)

    console.log(caixaDAL.getCaixa())
    res.render('home/principal')
}