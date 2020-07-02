const orm = require("../app/orm")
// const express = require("express")

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
}


module.exports = router