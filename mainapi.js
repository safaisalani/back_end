var express = require("express");
var mysql = require("mysql2");
// const Connection = require("mysql2/typings/mysql/lib/Connection");
var app = express();
var router = express.Router();
var connection = require("./database")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({
  extended:true
}));
router.get('/', (req, res) => {
    res.send('api works');
  });

  router.use(function timeLog (req, res, next) {
    // console.log('Time: ', Date.now())
    next()
  })
  router.get('/getDetailslist', (req, res, next) => {
    let sql = "SELECT * FROM Details";
    // console.log(sql);
    connection.query(sql, function(err, results){
        if(err) throw err;
        res.send(results);
        

    })
    
  });

  
router.post('/getusername', (req,res,next)=>{

  console.log(req.body);
    let username = req.body.username;
    let sql = "SELECT * FROM loign where username = '"+ username+"';";
    // console.log(sql);
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      if(!results){
        res.send("No data Found!")
      }else{
      res.send(results);
      // console.log(results);
          }
    });
   
    // res.send("hey hell!")
});

router.post('/InsertuserDetails', (req,res,next)=>{

  console.log(req.body);
    let Fistname = req.body.FirstName;
    let LastName = req.body.LastName;
    let MiddleName = req.body.MiddleName;
    let PhoneNumber = req.body.PhoneNumber;
    let Address = req.body.Address;
    let Email = req.body.Email;
    let Weight = req.body.Weight;
    let Height = req.body.Height;
    let sql = 'INSERT INTO Details(FirstName,LastName,MiddleName,PhoneNumber,Address,Email,Weight,Height) VALUES("'+FirstName+'","'+LastName+'","'+MiddleName+'","'+PhoneNumber+'","'+Address+'","'+Email+'","'+Weight+'","'+Height+'")';
    console.log(sql);
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      if(!results.affectedRows){
        res.send("No data Found!")
      }else{
      res.send(results.affectedRows);
      console.log(results.affectedRows);
          }
    });
   
    // res.send("hey hell!")
});

router.post('/Deleteid', (req,res,next)=>{

  console.log(req.body);
    let id = req.body.id;
    let sql = "delete FROM Details where id = '"+ id+"';";
    // console.log(sql);
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      if(!results.affectedRows){
        res.send("No data Found!")
      }else{
      res.send(results.affectedRows);
      console.log(results.affectedRows);
          }
    });
   
    // res.send("hey hell!")
});

module.exports = router;








