const orm = require("../app/orm");
const City = require("../model/city");
const CityModel = new City();
require('dotenv').config();
var path = require("path");
var fs = require('fs');

function router( app ){
    // GET all cities
    app.get("/api/cities/list", async function( req, res ){
        const cities = await orm.getCityList();
        res.send(cities);
    })

    //[GET] city profile
    app.get("/cities/:id", async function( req, res ){
        const city_id = req.params.id
        const city_info = await orm.selectCityData(city_id)
        res.send( city_info )
    })

    // GET pretty urls
    app.get("/destinations/:name", async function( req, res ){
        const name = req.params.name;
        const city_id = await orm.getCityIdByName(name);
        res.sendFile(path.join(__dirname, '..', '/public/cities.html'));
    })

    //[GET] city profile picture from Pexel API
    app.get("/api/pic/:cityname", async function( req, res ){
        const city_name = req.params.cityname
        const result = await CityModel.getCityPic( city_name )
        res.send( result )
    })

    // GET search feature for cities
    app.get("/api/search", async function( req, res ){
        const city_query = req.query.q
        const result = await CityModel.searchCities( city_query )
        res.send( result )
    })

    //[GET] get city weather information
    app.get("/api/weather/:cityname", async function( req, res ){
        const city_name = req.params.cityname
        const weather = await CityModel.getWeather( city_name )

        res.send( weather )
    });
 
    //[POST] submit city info
    app.post("/api/addcity", async function( req, res ){
        console.log(`[POST] data received:${req.body}`)
        await orm.insertCityData( req.body )
        res.redirect("/")
    });

    // [GET] render city content from database
    app.get("/api/data", async function(req, res){
        const cityUrl = req.query.url;
        const data = await CityModel.getCity(cityUrl);
        res.send(data);
    });

    // [GET] flight quotes
    app.get("/api/flightquote/:home/:homecountry/:destination/:destinationcountry/:depart/:return", async function( req, res ){
        console.log(`Home city:${req.params.home} To Destination city:${req.params.destination}; Depart at:${req.params.depart}; Return at:${req.params.return}`)
        const home_AP = await CityModel.convertCityNames( req.params.home, req.params.homecountry )
        const des_AP = await CityModel.convertCityNames( req.params.destination, req.params.destinationcountry )
        if ( home_AP && des_AP) {
            console.log( `Airport codes found` )
            const quotes = await CityModel.getFlightQuote(home_AP, des_AP, req.params.depart, req.params.return)
            res.status(200).send( quotes )
        }else{
            console.log( `Airport codes missing.`)
            res.send( { status: false, message: `City Not Found. Please try again.` } )
        }
    })
}

module.exports = router