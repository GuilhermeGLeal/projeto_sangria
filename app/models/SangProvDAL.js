function SangProvDAL(connection){

	this._connection = connection;
}

SangProvDAL.prototype.insert = async function(body){

    const { valor, tipo, motivo } = body;
    const client = await this._connection.connect()
    try {
        const res = await client.query("INSERT INTO sangria_provento (sangriaprov_tipo, sangriaprov_valor, sangriaprov_motivo) "+
        +"VALUES ($1, $2, $3)", 
        [tipo, valor, motivo])
        return res.rows[0]
    } 
    catch(err){
        err => console.log(err.stack)
    }
    
  
}

module.exports = function(){
	return SangProvDAL;
}