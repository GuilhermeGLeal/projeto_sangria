let { Client } = require('pg')

const postGres = function(){

   
    let conn = new Client({

      host: 'localhost',
      database: 'projeto_sangriaprovento',
      user: 'postgres',
      password: 'postgres123',
      port: 5432,

    });
    return conn.connect()
}

module.exports = function(){
		
    return postGres
}