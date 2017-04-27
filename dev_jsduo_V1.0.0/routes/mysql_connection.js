var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'jskim',
  password : 'mediavelo',
  database : 'quiz'
});

connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

var sql = "SELECT * FROM title";
connection.query(sql, function(err, rows, fields){
  if(err){
    console.log(err);
  }else{
    console.log('rows',rows);
    console.log('fields',fields);
  }
});

// connection.end();
