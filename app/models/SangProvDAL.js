function SangProvDAL(connection){

	this._connection = connection;
}

SangProvDAL.prototype.insert = function(body){

    const { valor, tipo, motivo } = body;
    this._connection.query("INSERT INTO sangria_provento (sangriaprov_tipo, sangriaprov_valor, sangriaprov_motivo) "+
        +"VALUES ($1, $2, $3)", 
        [tipo, valor, motivo],
        
        (err, res) => {
        this._connection.end();
         return err || res.rows 
    }); 
  
  
}

module.exports = function(){
	return SangProvDAL;
}