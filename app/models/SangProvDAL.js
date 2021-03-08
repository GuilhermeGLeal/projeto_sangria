function SangProvDAL(connection){

	this._connection = connection;
}

SangProvDAL.prototype.insert = async function(body, res, callback){

    const { valor, tipo, motivo } = body;
    const { rows } = await this._connection.query(
        "INSERT INTO sangria_provento (sangriaprov_tipo, sangriaprov_valor, sangriaprov_motivo) "+
        +"VALUES ($1, $2, $3)",
        [tipo, valor, motivo]
    )

    callback(rows)
}

module.exports = function(){
	return SangProvDAL;
}