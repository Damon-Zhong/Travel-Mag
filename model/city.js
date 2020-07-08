const orm = require("../app/orm");
const axios = require("axios")
const PexelsAPI = require('pexels-api-wrapper');
const API = new PexelsAPI(process.env.PEXEL_API_KEY)

class City {
    getCity = async (url) => {
        const city = await orm.selectCityData(url);
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

    convertCityNames = async ( cityName, countryName ) => {
        // convert city name to airport code
        const fetch_setting = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.SKYSCANNER_API_KEY
            }
        }
        const convert_API = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=${cityName}`
        var converCities = await axios.get(convert_API, fetch_setting)
        converCities = converCities.data.Places.filter( result => result.CountryName.toLowerCase() == countryName.toLowerCase() )
        console.log( converCities ) 
        return converCities.length > 0 ? converCities[0].PlaceId : ''
    }

    getFlightQuote = async ( home_AP_code, desdes_AP_code, departdate, returndate) => {
        //config
        // var proxyUrl = window.location.href.indexOf('herokuapp') > -1 ? '' : 'https://cors-anywhere.herokuapp.com/'proxyUrl + 
        const flightQuote_API = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${home_AP_code}/${desdes_AP_code}/${departdate}?inboundpartialdate=${returndate}`
        const fetch_setting = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.SKYSCANNER_API_KEY
            }
        }
        //fetch data from Skyscanner API
        const flightInfor = await axios.get(flightQuote_API, fetch_setting)
        console.log( `Getting flight quote...: ${flightInfor.data}`)
        return flightInfor.data.Quotes.length != 0 ? flightInfor.data.Quotes[0] : false
    }
}

module.exports = City
