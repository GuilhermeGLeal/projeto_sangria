const { Pool, Client } = require("pg");

const postGres = function() {

    const pool = new Pool({
        user: "postgres",
        host: "localhost",
        database: "projeto_sangriaprovento",
        password: "postgres123",
        port: "5432"
    });

    return pool
}

module.exports = function() {

    return postGres
}