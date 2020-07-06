var connection = require("../app/connection.js"); 
// to create question Marks  

var connection = require("./connection.js");

var orm = {
    selectCityData: function (cityId) {
        var queryString = "SELECT * FROM cities WHERE id = ?";
        return new Promise((resolve, reject) => {
            connection.query(queryString, [cityId], (err, res) => {
                if (err) throw err;
                resolve(res[0]);
            });
        });
    },
 
// Helper function to convert object key/value pairs to SQL syntax  


insertCityData: function ( cityName, countryName,  field, title, fieldVlaue ) {
    console.log(`Inserting data...`)
    //Insert user input to database
    return connection.query(`INSERT INTO cities(city_name, city_country, ${field}_headline, ${field}_link) VALUES (?,?,?,?)`, [cityName, countryName, title, fieldVlaue ])
},    


searchForCity: function (cityQuery) {
    var userInput = cityQuery.toLowerCase();
    var queryString = `SELECT * FROM cities WHERE LOWER(city_name) LIKE "%${userInput}%"`;
    return new Promise((resolve, reject) => {
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            resolve(res);
        });
    });
}
}

// function objToSql(ob) {
//     var arr = [];


//     for (var key in ob) {
//         var value = ob[key];

//         if (Object.hasOwnProperty.call(ob, key)) {

//             if (typeof value === "string" && value.indexOf(" ") >= 0) {
//                 value = "'" + value + "'";
//             }

//             arr.push(key + "=" + value);
//         }
//     }
//     return arr.toString();
// }
// var orm = {
//     selectAll: function(table, cb) {
//       var dbQuery = "SELECT * FROM " + table + ";";
  
//       connection.query(dbQuery, function(err, res) {
//         if (err) {
//           throw err;
//         }
//         cb(res);
//       });
//     }, 

//     create: function (table, col, value, cb) {
//         var queryString = "INSERT INTO " + table;
//         queryString += " (";
//         queryString += col.toString();
//         queryString += ") ";
//         queryString += "VALUES (";
//         queryString += printQuestionMarks(value.length);
//         queryString += ") ";
//         console.log(queryString);
//         connection.query(queryString, value, function (err, result) {
//             if (err)
//                 throw err;
//             no;
//             cb(result);
//         });
//     }, 
//     get create() {
//         return this._create;
//     },
//     set create(value) {
//         this._create = value;
//     },
//     update: function (table, objVal, condition, cb) {
//         var queryString = "UPDATE " + table;
//         queryString += " SET ";
//         queryString += objToSql(objVal);
//         queryString += " WHERE ";
//         queryString += condition;

//         console.log(queryString);
//         connection.query(queryString, function (err, result) {
//             if (err) throw err;
//             cb(result);
//         })
//     },
//     delete: function (table, condition, cb) {
//         var queryString = "DELETE FROM " + table;
//         queryString += " WHERE ";
//         queryString += condition;

//         console.log(queryString);
//         connection.query(queryString, function (err, result) {
//             if (err) throw err;
//             cb(result)
//         })
//     }
// } 








module.exports = orm;