const orm = require("../app/orm");

class City {
    getCity = async (city_id) => {
        const city = await orm.selectCityData(city_id);
        return city;
    }
}

module.exports = City;