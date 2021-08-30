var express = require("express");
var mysql = require("mysql2");
const http = require('http');
// const Connection = require("mysql2/typings/mysql/lib/Connection");
var app = express();
var router = express.Router();
var connection = require("./database")
var mainapi = require("./mainapi")
const bodyParser = require("body-parser")
var cors = require('cors')
 app.use(cors())
 
// New app using express module
app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({ 
  limit: '500mb',
  extended: false }));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
  });

app.get('/', (req, res) => {
    res.send('api works');
  });

  app.use('/mainapi',mainapi);
app.listen(8000, function(){
    console.log("app listening on port 8000");
    connection.connect(function(err){
        if(err)throw err;
      
        console.log("Database connected");
    })
});
const server = http.createServer(app);
server.listen(6000, () => console.log(`API running on localhost:${6000}`));