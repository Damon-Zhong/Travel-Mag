var mysql = require("mysql");
require('dotenv').config();

// Setting up database connection
var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : 'destinations'
      });
};

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected to the city database!");
// });

module.exports = connection;