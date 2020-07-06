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

    insertCityData: function (){
        
        
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

module.exports = orm;
