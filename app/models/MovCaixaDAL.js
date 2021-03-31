function MovCaixaDAL(connection){

	this._connection = connection;
}

MovCaixaDAL.prototype.insert = async function(caixaid, sangprovid){
   
    const client = await this._connection.connect()
    try {
        const res = await client.query("INSERT INTO mov_caixa (caixa_id, sangriaprov_id) VALUES ($1, $2)", 
        [caixaid, sangprovid])
        return res.rows[0]
    } 
    catch(err){
        err => console.log(err.stack)
    }
   
   
}

module.exports = function(){
	return MovCaixaDAL;
}