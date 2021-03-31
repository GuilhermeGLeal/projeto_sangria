module.exports.salvarSangria = function(app, req ,res){

    let form = req.body

    req.assert("valor", "valor não pode ser vazio!!").notEmpty();
    req.assert("motivo", "motivo não pode ser vazio!!").notEmpty();
    req.assert("motivo", "motivo deve conter entre 10 e 150 caracteres").len(10, 150)

    const erros = req.validationErrors();

	if(erros){

		res.render("home/principal", {validacao: erros, caixa: {}})
		return "";
	}
     res.redirect('/')
    
}