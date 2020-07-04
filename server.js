require( 'dotenv' ).config()

import express, { urlencoded, json, static } from "express";
import exphbs from "express-handlebars";
import routerController from "./controller/router";

const app = express();
// handlebars initialization
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// for parsing incoming POST data
app.use(urlencoded({ extended: true }));
app.use(json());

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// for routes
routerController(app)

// for serving media assets
app.use( static('public') )

app.listen(PORT, function() {
    console.log( `Listening on port: ${PORT}` );
})
