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
    let sql = "SELECT * FROM Details where  DeleteStatus = 0";
    // console.log(sql);
    connection.query(sql, function(err, results){
        if(err) throw err;
        res.send(results);
        

    })
    
  });

  
router.post('/loginauth', (req,res,next)=>{
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
    let Fistname = req.body.username.FirstName;
    let LastName = req.body.username.LastName;
    let MiddleName = req.body.username.MiddleName;
    let PhoneNumber = req.body.username.PhoneNumber;
    let countryCode = req.body.username.countryCode;
    let Address = req.body.username.Address;
    let Country = req.body.username.Country[1];
    let Email = req.body.username.Email;
    let Weight = req.body.username.Weight;
    let Height = req.body.username.Height;
    let state = req.body.username.state;
    console.log(state);
    let ZipCode = req.body.username.ZipCode;
    let sql = 'INSERT INTO Details(FirstName,LastName,MiddleName,PhoneNumber,Address,Email,Weight,Height,Country,State,Zipcode) VALUES("'+Fistname+'","'+LastName+'","'+MiddleName+'","'+countryCode+PhoneNumber+'","'+Address+'","'+Email+'","'+Weight+'","'+Height+'","'+Country+'","'+state+'","'+ZipCode+'");';
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      if(!results.affectedRows){
        res.send(Status = 404,"Failed To Insert Data!")
      }else{
      res.send(Status = 200,results.affectedRows,"Inserted Sucessfully");
      console.log(results.affectedRows);
          }
    });
   
    // res.send("hey hell!")
});

router.post('/Deleteid', (req,res,next)=>{

  console.log(req.body);
    let id = req.body.id;
    let sql = "update  Details set DeleteStatus = 1 where id = '"+ id+"';";
    console.log(sql);
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      if(!results.affectedRows){
        res.send(status=404,"Can not Delete!")
      }else{
      res.send(status=200,results.affectedRows,"Deleted Sucessfully");
      console.log(results.affectedRows);
          }
    });
   
    // res.send("hey hell!")
});

router.post('/GetViewData', (req,res,next)=>{

  console.log(req.body);
    let id = req.body.id;
    let sql = "select *  from Details where id = '"+ id+"';";
    console.log(sql);
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      if(!results){
        res.send(status=404,"Can not Get!")
      }else{
      res.send(results[0],status=200,"View Data Sucessfully");
      console.log(results);
          }
    });
   
    // res.send("hey hell!")
});

module.exports = router;








