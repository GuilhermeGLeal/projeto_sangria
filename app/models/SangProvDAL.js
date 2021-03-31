function SangProvDAL(connection){

	this._connection = connection;
}

SangProvDAL.prototype.insert = async function(body){

    const { valor, tipo, motivo } = body;
    let valorcorreto = parseFloat(valor)
    let tipocorreto = parseInt(tipo)

    const client = await this._connection.connect()
    try {
       
        let sql = "INSERT INTO sangria_provento (sangriaprov_tipo, sangriaprov_valor, sangriaprov_motivo) VALUES ($1, $2, $3)"
        let values = [tipocorreto, valorcorreto , motivo]
        const res = await client.query(sql, values)
        return res.rows
    } 
    catch(err){
       
        return err
    }
    
    
  
}
SangProvDAL.prototype.MaxPK = async function(){

    const client = await this._connection.connect()
    try {
        const res = await client.query("select max(sangriaprov_id) from sangria_provento")
        return res.rows[0]
    } 
    catch(err){
        return err
    }
    
}

module.exports = function(){
	return SangProvDAL;
}