function CaixaDAL(connection){

	this._connection = connection;
  
}

CaixaDAL.prototype.getCaixa = async function () {

    const client = await this._connection.connect()
    try {
        const res = await client.query('select * from caixa')
        return res.rows[0]
    } 
    catch(err){
        err => console.log(err.stack)
    }
    finally {
        // Make sure to release the client before any error handling,
        // just in case the error handling itself throws an error.
        client.release()
    }
    


}


CaixaDAL.prototype.atualizarSaldo = async function(caixa_id, saldoNovo){

    const client = await this._connection.connect()
    try {
        const res = await client.query("update caixa set caixa_valorfinal = $1 where caixa_id = $2", 
        [saldoNovo, caixa_id])
        return res.rows[0]
    } 
    catch(err){
        err => console.log(err.stack)
    }
    finally {
        // Make sure to release the client before any error handling,
        // just in case the error handling itself throws an error.
        client.release()
    }
    
}


module.exports = function(){
	return CaixaDAL;
}