const { validationResult } = require("express-validator");

module.exports.salvarSangria = async function (app, req, res) {

	let form = req.body
	let saldo_novo = 0;
	
	console.log(form)
	const connection = app.config.dbConnection();
	const caixaDAL = new app.app.models.CaixaDAL(connection)
	const movCaixaDAL = new app.app.models.MovCaixaDAL(connection)
	const SangProvDAL = new app.app.models.SangProvDAL(connection)

	const erros = validationResult(req)

	if (!erros.isEmpty()) {

		const caixaAtual = await caixaDAL.getCaixa();

		res.render("home/principal", { validacao: erros.errors, caixa: caixaAtual})
		return "";
	}

	let valorTela = parseFloat(form.valor)
  	let valorCaixa = parseFloat(form.caixa_valorfinal)

	if(parseInt(form.tipo) === 2){
		
		if(valorTela > valorCaixa){

			const caixaAtual = await caixaDAL.getCaixa();

			res.render("home/principal", { validacao: [{msg: 'ERRO: o valor inserido para a sangria, é maior do que o saldo atual em caixa!!'}], caixa: caixaAtual})
			return "";
			
		}
		else
			saldo_novo = valorCaixa - valorTela
		
	}
	else{

		saldo_novo = valorTela + valorCaixa
	}
		
	
	SangProvDAL.insert(form)
	let sangprov = SangProvDAL.MaxPK()
	console.log(sangprov)
	//movCaixaDAL.insert(form.caixa_id, sangprov)
	//caixaDAL.atualizarSaldo(form.caixa_id, saldo_novo)
	//const caixaAtual = await caixaDAL.getCaixa();
	
	res.render("home/principal", { validacao: {}, caixa: caixaAtual})




}