var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

connection.connect();

connection.query('SELECT "SUKSES" AS result', function (err, rows, fields) {
  if (err) throw err;
  console.log(rows[0].result);
});

connection.end();
