var mysql = require("mysql2");
var connection = mysql.createConnection({
    host: '13.234.40.116',
    database:'Ltick_live_22',
    user: 'root',
    password: 'Lentera@20192'
})

module.exports = connection;