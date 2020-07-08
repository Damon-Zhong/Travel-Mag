var connection = require("./connection.js");

var orm = {
    selectCityData: function (url) {
        var queryString = "SELECT * FROM cities WHERE url = ?";
        return new Promise((resolve, reject) => {
            connection.query(queryString, [url], (err, res) => {
                if (err) throw err;
                resolve(res[0]);
            });
        });
    },

    insertCityData: function ( inputObj ){
        var cityUrl = inputObj.city_name.toLowerCase().replace(/\s+/g, "-");
        var cityData = {...inputObj, url: cityUrl};
        const queryString = "INSERT INTO cities SET ? "
        return new Promise((resolve, reject) => {
            connection.query(queryString, cityData, (err, res) => {
                if (err) throw err;
                resolve(res[0]);
            });
        })
    },

    getCityList: function(){
        var queryString = "SELECT id, city_name, url FROM cities";
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
