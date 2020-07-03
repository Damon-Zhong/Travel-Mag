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
        console.log(result.photos[0].src.medium)
        // return a medium size pic
        return result.photos[0].src.medium
    }
}

module.exports = City
