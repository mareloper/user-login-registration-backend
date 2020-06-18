const mysql = require('mysql');
const express = require('express');


 const mysqlConn =mysql.createConnection({

  host:'localhost',
  user:'root',
  password:'',
  database:'userLogin_db',
  multipleStatements: true

})


mysqlConn.connect((err)  =>{

if(!err)


console.log('Our user database is successful');


else


console.log('Our user database is not yet successful');


});

module.exports =mysqlConn;
