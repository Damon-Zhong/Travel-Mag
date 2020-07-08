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

    insertCityData: function ( inputObj ){
        console.log(`Inserting Data:`, inputObj )

        const queryString = "INSERT INTO cities SET ? "
        return new Promise((resolve, reject) => {
            connection.query(queryString, inputObj, (err, res) => {
                if (err) throw err;
                resolve(res[0]);
            });
        })
        
    },

    getCityList: function(){
        var queryString = "SELECT id, city_name FROM cities";
        return new Promise((resolve, reject) => {
            connection.query(queryString, (err, res) => {
                if (err) throw err;
                resolve(res);
            });
        });
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
    },

    getCityIdByName: function(url) {
        var queryString = `SELECT id FROM cities WHERE url = ?`;
        return new Promise((resolve, reject) => {
            connection.query(queryString, [url], (err, res) => {
                if (err) throw err;
                resolve(res[0]);
            });
        });
    }
}

module.exports = orm;
