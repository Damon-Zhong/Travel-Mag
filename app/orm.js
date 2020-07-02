const axios = require("axios");
const PexelsAPI = require('pexels-api-wrapper');
// import { createClient } from 'pexels';

let cityInfo = [
    { id: 0, city_name: "Toronto", description: "" },
    { id: 1, city_name: "Markham" },
    { id: 2, city_name: "Hamilton" },
    { id: 3, city_name: "Etobicoke" }
]

let restaurantList = [
    { id: 0, res_name: "restaurant-1", addr: "address-1", cityName: "Toronto" },
    { id: 1, res_name: "restaurant-2", addr: "address-2", cityName: "Markham" },
    { id: 2, res_name: "restaurant-3", addr: "address-3", cityName: "Hamilton" },
    { id: 3, res_name: "restaurant-4", addr: "address-4", cityName: "Etobicoke" }
]

function getCityList(){
    return cityInfo
}
function getRestaurantList(cityname) {
    return restaurantList.filter(item => item.cityName == cityname)
}

async function getWeather(cityName) {
    //Complete api url with user input city name
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c6f6f0d5ef4d5464dfe745e65c596599`;
    //Retrieve data from api
    const result = await axios.get(api)
    return result.data
}

async function getCityPic(cityName) {
    const pexelsAPI = new PexelsAPI("563492ad6f917000010000015e76a9ba75e443c6a2942de7f354aac8")
    const query = cityName
    const result = await pexelsAPI.search( query, 10, 1)
    console.log( result.photos[0].src.medium )
    // return a medium size pic
    return result.photos[0].src.medium
}

function addCity( cityName, description, res_name, res_addr){
    cityInfo.push( { id:cityInfo.length, city_name: cityName, description  } )
    restaurantList.push( {id:restaurantList.length, res_name:res_name, addr:res_addr, cityName:cityName } )
}
module.exports = {
    getCityList, getRestaurantList, getWeather, getCityPic, addCity
}




//Sample API reuslts
//OpenWeather:
// {"coord":{"lon":-79.42,"lat":43.7},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":31.11,"feels_like":30.63,"temp_min":30.56,"temp_max":32,"pressure":1013,"humidity":43},"visibility":14484,"wind":{"speed":4.1,"deg":290,"gust":7.7},"clouds":{"all":1},"dt":1593704765,"sys":{"type":1,"id":941,"country":"CA","sunrise":1593682831,"sunset":1593738168},"timezone":-14400,"id":6167865,"name":"Toronto","cod":200}
//Pexel:
// {
//     "page": 1,
//     "per_page": 1,
//     "photos": [
//       {
//         "id": 2880507,
//         "width": 4000,
//         "height": 6000,
//         "url": "https://www.pexels.com/photo/woman-in-white-long-sleeved-top-and-skirt-standing-on-field-2880507/",
//         "photographer": "Deden Dicky Ramdhani",
//         "photographer_url": "https://www.pexels.com/@drdeden88",
//         "photographer_id": 1378810,
//         "src": {
//           "original": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg",
//           "large2x": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//           "large": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
//           "medium": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=350",
//           "small": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=130",
//           "portrait": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//           "landscape": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//           "tiny": "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
//         },
//         "liked": false
//       }
//     ],
//     "next_page": "https://api.pexels.com/v1/curated/?page=2&per_page=1"
//   }
  