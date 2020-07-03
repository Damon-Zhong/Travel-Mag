const orm = require("../app/orm");
const express = require("express");
const City = require("../model/city");
const { response } = require("express");
const CityModel = new City();

function router( app ){
    //[GET] landing page
    // app.get("/", function( req, res ){

    // })
    //[GET] city profile picture from Pexel API
    app.get("/api/pic/:cityname/", async function( req, res ){
        const city_name = req.params.cityname
        const result = await CityModel.getCityPic( city_name )
        // console.log( result )
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
    app.post("/api/addcity", function( req, res ){
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
    app.get("/api/data/:id", async function(req, res){
        const cityId = req.params.id;
        const data = await CityModel.getCity(cityId);
        res.send(data);
    });
    // [GET] render city content from database
    app.get("/api/data", async function(req, res){
        const cityId = req.query.id;
        const data = await CityModel.getCity(cityId);
        res.send(data);
    });
}

module.exports = router