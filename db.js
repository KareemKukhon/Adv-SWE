const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'localhost',     
    user: 'root',  
    password: '', 
    database: 'jobboard'  
  });

module.exports = connection;
