const orm = require("../app/orm");
const axios = require("axios")
const PexelsAPI = require('pexels-api-wrapper');
const API = new PexelsAPI("563492ad6f917000010000015e76a9ba75e443c6a2942de7f354aac8")

const orm = require("../app/orm");
const axios = require("axios")
const PexelsAPI = require('pexels-api-wrapper');
const API = new PexelsAPI("563492ad6f917000010000015e76a9ba75e443c6a2942de7f354aac8")

class City {
    getCity = async (city_id) => {
        const city = await orm.selectCityData(city_id);
        return city;
    }

    getWeather = async (cityName) => {
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c6f6f0d5ef4d5464dfe745e65c596599`;
        //Retrieve data from api
        const result = await axios.get(api)
        // console.log( result )
        return result.data
    }

    getCityPic = async (cityName) => {
        const query = cityName
        const result = await API.search(query, 10, 1)
        // return the first photo obj
        return result.photos[0]
    }

    searchCities = async (cityQuery) => {
        const query = await orm.searchForCity(cityQuery);
        return query;
    }
}

module.exports = City
// for submit city
// var orm = require("../config/orm.js");

// var city_name = {
//     all: function (cb) {
//         orm.all("city_name", function (res) {
//             cb(res);
//         });
//     },
//     create: function (col, value, cb) {
//         orm.create("city_name", col, value, function (res) {
//             cb(res);
//         });
//     },
//     update: function (objVal, condition, cb) {
//         orm.update("city_name", objVal, condition, function (res) {
//             cb(res);
//         });
//     },
//     delete: function (condition, cb) {
//         orm.delete("city_name", condition, function (res) {
//             cb(res);
//         });
//     }
// };

