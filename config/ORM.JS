var connection = require("../app/connection.js"); 
// to create question Marks  

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

var orm = {
    selectAll: function(table, cb) {
      var dbQuery = "SELECT * FROM " + table + ";";
  
      connection.query(dbQuery, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    }, 

    create: function (table, col, value, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(value.length);
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, value, function (err, result) {
            if (err)
                throw err;
            no;
            cb(result);
        });
    },






module.exports = orm;