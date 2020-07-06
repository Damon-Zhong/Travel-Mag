<<<<<<< HEAD
const orm = require("../app/orm")
// const express = require("express")
=======
const orm = require("../app/orm");
const express = require("express");
const City = require("../model/city");
const { response } = require("express");
const CityModel = new City();
>>>>>>> develop

function router( app ){
    //[GET] landing page
    // app.get("/", function( req, res ){

    // })
    //[GET] city profile picture from Pexel API
    app.get("/pic/:cityname/", function( req, res ){
        const city_name = req.params.cityname
        const result = orm.getCityPic( city_name )
        res.send( result )
    })

    //[GET] search by city name or click on city
    app.get("/:cityname", function( req, res ){
        const city_name = req.params.cityname
        const weather = orm.getWeather( city_name )
        const restaurants = orm.getRestaurantList( city_name )
        res.send( weather )
    })
 
    //[POST] submit city info
    app.post("/addcity", function( req, res ){
        console.log(`[POST] data received:${req.body}`)
        const userInput = req.body
        const city_name = userInput.cityName
        const city_description = userInput.cityDescription
        const res_name = userInput.res_name
        const res_addr = userInput.res_addr
        const result = orm.addCity( city_name, city_description, res_name, res_addr )
        const newList = orm.getCityList()
        res.send( newList )
        console.log(`new city list:${newList}`)
    })

    // [GET] render city content from database
    app.get("/api/data", async function(req, res){
        const cityId = req.query.id;
        const data = await CityModel.getCity(cityId);
        res.send(data);
    });
} 





// For Submit City - seach city name & category  

const orm = require("../app/orm");
const express = require("express");
const City = require("../model/city");
const { response } = require("express"); 

const CityModel = new City(); 

const fs = require("fs")

function router( app ){
    //[GET] city profile
    app.get("/cities/:id", async function( req, res ){
        const city_id = req.params.id
        const city_info = await orm.selectCityData(city_id)
        // let html = fs.readFileSync( './public/cities.html', 'utf8')
        res.send( city_info )
    })
    //[GET] city profile picture from Pexel API
    app.get("/api/pic/:cityname", async function( req, res ){
        const city_name = req.params.cityname
        // console.log(`city name:`, city_name)
        const result = await CityModel.getCityPic( city_name )
        // console.log( `route result:`, result )
        res.send( result )
    })

    // GET search feature for cities 

    app.get("/api/search", async function( req, res ){
        const city_query = req.query.q
        const result = await CityModel.searchCities( city_query )
        res.send( result )
    })

    //[GET] search by city name or click on city 

    app.get("/api/weather/:cityname", async function( req, res ){
        const city_name = req.params.cityname
        const weather = await CityModel.getWeather( city_name )
        console.log( weather )
        res.send( weather )
    })
 
    //[POST] submit city info
    app.post("/api/addcity", async function( req, res ){
        console.log(`[POST] data received:${req.body}`)
        await orm.insertCityData( req.body.cityName, req.body.countryName, req.body.fields, req.body.headline, req.body.link )

        res.redirect("/")
        // const userInput = req.body
        // const city_name = userInput.cityName
        // const city_description = userInput.cityDescription
        // const res_name = userInput.res_name
        // const res_addr = userInput.res_addr
        // const result = orm.addCity( city_name, city_description, res_name, res_addr )
        // const newList = orm.getCityList()
        // res.send( newList )
        // console.log(`new city list:${newList}`)
    })

    // [GET] render city content from database
    app.get("/api/data", async function(req, res){
        const cityId = req.query.id;
        const data = await CityModel.getCity(cityId);
        res.send(data);
    });
}

module.exports = router

module.exports = router