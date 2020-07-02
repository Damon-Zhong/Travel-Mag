var connection = require("./connection.js");

var orm = {
    selectCityData: function(cityId){
        var queryString = "SELECT * FROM cities WHERE id = ?";
        return new Promise( (resolve, reject) => {
            connection.query(queryString, [cityId], (err, res) => {
                if (err) throw err;
                resolve(res[0]);
            });
        });
    }
}

let cityInfo = [
    { id:0, city_name:"Greece"}
]

let restaurantList = [
    { id:0, res_name:"restaurant-1", addr:"address-1", cityName:"Greece"}
]

function getRestaurantList( cityname ){
    return restaurantList.filter( item => item.cityName == cityname )
}

module.exports = orm;