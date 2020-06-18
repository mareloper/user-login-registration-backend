const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const db = require("../connection/conn");
const mysqlConn =require('../connection/conn');


//requesting login details from the user

router.post('/user_login',function(req,res){

        var username= req.body.username;
        var password = req.body.password;
        db.query('SELECT * FROM user WHERE username = ?',[username], function (error, results, fields) {
        if (error) {

          res.send({
            "code":400,
            "failed": "There's no value passed"
          })
        }else{

//testing if the user is registered or not

          if(results.length >0){
            if(results[0].password == password){
                
                var username = req.body.username
                db.query('select * from user where username = ?',username, function(err, results, fields){  
                    return res.send(results)
                })
            }
            else{
              res.send({
                "code":204,
                "success":"The Username and password does not match"
                  });
            }
          }
          else{
            res.send({
              "code":204,
              "success":"Username does not exist please make sure that the user is registered"
                });
          }
        }
    });
});

module.exports = router ;