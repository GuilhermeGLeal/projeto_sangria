function MovCaixaDAL(connection){

	this._connection = connection;
}

MovCaixaDAL.prototype.insert = async function(caixaid, sangprovid, res, callback){
   
    const { rows } = await this._connection.query(
        "INSERT INTO mov_caixa (caixa_id, sangriaprov_id) "+
        +"VALUES ($1, $2)",
        [caixa_id, sangprovid]
    )

    callback(rows)
}



module.exports = function(){
	return MovCaixaDAL;
}