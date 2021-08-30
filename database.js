var mysql = require("mysql2");
var connection = mysql.createConnection({
    host: 'localhost',
    database:'crud_db',
    user: 'root',
    password: '20192'
})

module.exports = connection;