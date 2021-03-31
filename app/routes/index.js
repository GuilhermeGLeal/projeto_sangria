const { check} = require("express-validator");

module.exports = function(app){
	
	app.get('/', function(req, res){

		
		app.app.controllers.caixaController.carregarCaixa(app, req, res);
	});

	app.post('/salvarsangria',[
		check('caixa_fechamento', 'caixa está fechado!!').not().isDate(),
		check('valor','valor não pode ser vazio!').notEmpty(),
    	check('motivo', 'motivo não pode ser vazio!' ).notEmpty(),
  	  check('motivo','motivo deve estar entre 10 e 150 caracteres').isLength(10, 150),
    	check('valor', 'valor deve ser um número decimal e positivo!!').matches(/^\d+(\.\d{1,2})?$/)
	  ], function(req, res){

		app.app.controllers.sangprovController.salvarSangria(app, req, res);
	})
}