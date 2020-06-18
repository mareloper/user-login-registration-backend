const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const  db = require('../connection/conn');

//registering user

        router.post('/user_reg', function(req, res){  
            var post = {

                "email" : req.body.email,
                "username" : req.body.username,
                "password" : req.body.password
            };
//if the user does not post anything an error message will occur      
            if(!post){
                res.send({
                    code : 400,
                    message : "There's no value passed"
                })
            }
//stores the values passed to the database
            var myQuery = "INSERT INTO user SET ?";
            db.query(myQuery, [post], function(err, results, fields){
                if(err){
                    
                    res.send({
                        data : err,
                        code : 400,
                        message : "Account already exists!"
                    }); 
                }else{
                    var email = req.body.email
                    db.query('select * from user where email = ?',email, function(err, results, fields){
                        
                 
                    return res.send(results)
                })
            }
            });
            
//getting information from user database and also for front end to get access to our database
router.get("/GetUsers", (req, res) => {
    mysqlConn.query("SELECT * from user ", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
      console.log("success!\n");
      console.log(rows);
    } else {
      console.log(err);
      res.send(err);
    }
  });
});
        
        })
module.exports = router;