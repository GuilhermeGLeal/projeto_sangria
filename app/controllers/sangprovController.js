const { validationResult } = require("express-validator");

module.exports.salvarSangria = async function (app, req, res) {

	let form = req.body
	let saldo_novo = 0;
	
	console.log(form)
	const connection = app.config.dbConnection();
	const caixaDAL = new app.app.models.CaixaDAL(connection)
	//const movCaixaDAL = new app.app.models.MovCaixaDAL(connection)
	//const SangProvDAL = new app.app.models.SangProvDAL(connection)

	const erros = validationResult(req)

	if (!erros.isEmpty()) {

		const caixaAtual = await caixaDAL.getCaixa();

		res.render("home/principal", { validacao: erros.errors, caixa: caixaAtual})
		return "";
	}

	let valorTela = parseFloat(form.valor)
  	let valorCaixa = parseFloat(form.caixa_valorfinal)

	if(parseInt(form.tipo) === 2){
		
		console.log(valorTela, valorCaixa)
		if(valorTela > valorCaixa){

			//carregar o caixa novamente
			// mandar o erro para a tela
			
		}
		
	}
	else{

		saldo_novo = valorTela + valorCaixa
	}
		

	// cria sangria/provento
	// cria movimento
	// atualiza o caixa
	// depois pega o novo caixa
	res.redirect('/')



}