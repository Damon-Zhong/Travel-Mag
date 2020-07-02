let cityInfo = [
    { id:0, city_name:"Greece"}
]

let restaurantList = [
    { id:0, res_name:"restaurant-1", addr:"address-1", cityName:"Greece"}
]

function getRestaurantList( cityname ){
    return restaurantList.filter( item => item.cityName == cityname )
}