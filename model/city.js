const orm = require("../app/orm");

class City {
    getCity = async (city_id) => {
        const city = await orm.selectCityData(city_id);
        return city;
    }
}  
``
// for submit city
var orm = require("../config/orm.js");

var city_name = {
    all: function (cb) {
        orm.all("city_name", function (res) {
            cb(res);
        });
    },
    create: function (col, value, cb) {
        orm.create("city_name", col, value, function (res) {
            cb(res);
        });
    },
    update: function (objVal, condition, cb) {
        orm.update("city_name", objVal, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("city_name", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = City;