function CaixaDAL(connection){

	this._connection = connection;
}

CaixaDAL.prototype.getCaixa = function(){

    this._connection.query("SELECT * from caixa", (err, res) => {
        this._connection.end();
        return res.rows
    });
}


CaixaDAL.prototype.atualizarSaldo = function(caixa_id, saldoNovo){

    this._connection.query("update caixa set caixa_valorfinal = $1 where caixa_id = $2", 
        [saldoNovo, caixa_id],
        
        (err, res) => {
        this._connection.end();
        return err || res.rows 
    });

}


module.exports = function(){
	return CaixaDAL;
}