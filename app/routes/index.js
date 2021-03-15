
module.exports = function(app){
	
	app.get('/', function(req, res){

		
		app.app.controllers.caixaController.carregarCaixa(app, req, res);
	});

	app.post('/salvarsangria', function(req, res){

		app.app.controllers.sangprovController.salvarSangria(app, req, res);
	})
}