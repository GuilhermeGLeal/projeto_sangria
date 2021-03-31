let express = require('express');
const consign = require('consign');
let app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');


app.use(express.static('./app/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())



consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);


module.exports = app;