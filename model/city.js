const orm = require("../app/orm");
const axios = require("axios")
const PexelsAPI = require('pexels-api-wrapper');
const API = new PexelsAPI("563492ad6f91700001000001129d53cdb13a4d1e8f6eb72fd2b59822")

class City {
    getCity = async (city_id) => {
        const city = await orm.selectCityData(city_id);
        return city;
    }

    getWeather = async (cityName) => {
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c6f6f0d5ef4d5464dfe745e65c596599`;
        //Retrieve data from api
        const result = await axios.get(api)
        return result.data
    }

    getCityPic = async (cityName) => {
        const query = cityName
        const result = await API.search(query, 10, 1)
        if (result) {
            // return the first photo obj
            return result.photos[0]
        }

        return {}
    }

    searchCities = async (cityQuery) => {
        const query = await orm.searchForCity(cityQuery);
        return query;
    }
}

module.exports = City
