var mysql = require("mysql2");
var connection = mysql.createConnection({
    host: 'localhost',
    database:'crudDb',
    user: 'root',
    password: 'password'
})

module.exports = connection;
