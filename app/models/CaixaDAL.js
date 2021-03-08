function CaixaDAL(connection){

	this._connection = connection;
}

CaixaDAL.prototype.getCaixa = function(){

    this._connection.query("SELECT * from caixa", (err, res) => {
        this._connection.end();
        console.log(res.rows)
    });
}


CaixaDAL.prototype.atualizarSaldo = async function(caixa_id, saldoNovo, res, callback){

    const { rows } = await this._connection.query(
        "update caixa set caixa_valorfinal = $1 where caixa_id = $2",     
        [saldoNovo, caixa_id]
    )

    callback(rows)
}


module.exports = function(){
	return CaixaDAL;
}