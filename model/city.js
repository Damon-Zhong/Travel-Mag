const orm = require("../app/orm");
const axios = require("axios")
const PexelsAPI = require('pexels-api-wrapper');
const API = new PexelsAPI(process.env.PEXEL_API_KEY)

class City {
    getCity = async (city_id) => {
        const city = await orm.selectCityData(city_id);
        return city;
    }

    getWeather = async (cityName) => {
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
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
