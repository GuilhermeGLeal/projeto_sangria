function MovCaixaDAL(connection){

	this._connection = connection;
}

MovCaixaDAL.prototype.insert = async function(caixaid, sangprovid){
   
    let id_caixa = parseInt(caixaid)
    let sangria = parseInt(sangprovid)
    
    
    const client = await this._connection.connect()
    try {
        let sql = "INSERT INTO mov_caixa(caixa_id, sangriaprov_id) VALUES($1, $2)"
        let values =  [id_caixa, sangria]
        const res = await client.query(sql, values)
        return res.rows
    } 
    catch(err){
        return err
    }
    
  
   
}

module.exports = function(){
	return MovCaixaDAL;
}