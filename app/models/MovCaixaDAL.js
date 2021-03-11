function MovCaixaDAL(connection){

	this._connection = connection;
}

MovCaixaDAL.prototype.insert = function(caixaid, sangprovid){
   
    this._connection.query("INSERT INTO mov_caixa (caixa_id, sangriaprov_id) VALUES ($1, $2)", 
        [caixaid, sangprovid],
        
        (err, res) => {
        this._connection.end();
        return err || res.rows 
    });    
   
}

module.exports = function(){
	return MovCaixaDAL;
}