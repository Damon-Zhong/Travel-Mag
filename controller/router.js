const orm = require("../app/orm");
const express = require("express");
const City = require("../model/city");
const { response } = require("express");
const CityModel = new City();

function router( app ){
    app.get("/", function( req, res ){
    })

    // [GET] render city content from database
    app.get("/api/data", async function(req, res){
        const cityId = req.query.id;
        const data = await CityModel.getCity(cityId);
        res.send(data);
    });
}

module.exports = router