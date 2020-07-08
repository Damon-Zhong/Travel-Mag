

  # TravelMag – your digital travel magazine

![TravelMag landing page](https://github.com/Damon-Zhong/Travel-Mag/blob/develop/public/Assets/screenshots/travelmag-landing.png)
 

  > Landing Page of TravelMag

 ---

  ### Table of Contents
 - [Description](#description)
 - [Technologies](#technologies)
 - [Future Road Map](#future-road-map)
 - [License](#license)
 - [coMeDia Team](#coMeDia-Team)

  ---

  ## Description

  
 <p> TravelMag is an application that allows the user get access to all the top things to do in a city. From top hotels to the best restaurants and bars in town to ideas on what activities one can enjoy with their kids.<br>TravelMag allows the user to explore a curated collection of articles that list out the most famous and best of each category. The user can easily plan the itinerary for their trip with information about places to visit as well as flight prices, weather, and hotels.<br>The application is accessible under: https://shielded-sierra-26115.herokuapp.com/</p>  

### Core features

#### Landing page
 <p> On the landing page, users can choose from the available cities that are in the database to explore. They can also, from any area of the page, choose from the dropdown menu in the navbar to select a specific city.</p> 

  ![Cities overview](https://github.com/Damon-Zhong/Travel-Mag/blob/develop/public/Assets/screenshots/cities.png)

#### City page
 <p> On the city overview page, all the content is structures with tiles. Each topic has its own tile.</p> 

 ![City page](https://github.com/Damon-Zhong/Travel-Mag/blob/develop/public/Assets/screenshots/city-page.png)
 
 <p>Aside from tiles featuring articles, there are also tiles for weather, flights, and the curator of the page (only if they have submitted their personal info).</p> 

  ![Tile overview](https://github.com/Damon-Zhong/Travel-Mag/blob/develop/public/Assets/screenshots/api-tiles.png)

#### Submit page
 <p> The submit page is here so that people can submit a city that they know very well to the database. They'll have to enter information and links about all the topics that are part of TravelMag and can optionally also include their information (to tell other users what makes them an expert on the city).</p> 

  ![Submit page](https://github.com/Damon-Zhong/Travel-Mag/blob/develop/public/Assets/screenshots/submit.png)

[Back To The Top](#table-of-contents)

  ---  
## Future development roadmap  
<p>In the foreseeable feature our Team has many ideas that can make this app more user friendly. The application that are to be added in the future are:</p>      

- Functionality around approval process for submissions
- Function of updating city profile that allows curator to edit city profile after submitting
- Prices for hotels with direct links for booking 
- Flight widget with link to external overview page
- Itinerary where user can plan their trip in detail  (save for later and share with others)
- Add additional topics and sub categories 
- Support for small /locally owned business  
- Have the user take a mini quiz to produce filtered search results 


[Back To The Top](#table-of-contents)

  ---  
 


 ## Technologies

### Core technologies  
- HTML/CSS 
- JavaScript 
- Node 
- MySQL Database     


### APIs
- Weather: OpenWeatherMap API ([Documentation](https://openweathermap.org/api))
- Flights: Skyscanner API ([Documentation](https://www.partners.skyscanner.net/developer-documentation))
- Images: Pexels API ([Documentation](https://www.pexels.com/api/documentation/?locale=en-US))


### Hosting Platforms 
- Github
- Heroku

### How to run the application 

To get started with the application, simply clone the project and run "npm install" on your command line after navigating to your repository. There is a seed file in the repository for your convenience and to pre-populate the database with some values for testing. Once you're all set, all you have to do is run "node server.js" and you can work with the application.
 
  [Back To The Top](#table-of-contents)

  ----


## Credits
- The project uses the MySQL npm package to connect to the SQL database and to perform queries. Documentation available under: https://www.npmjs.com/package/mysql
- This application uses the express module for Node.js. Documentation is available under https://www.npmjs.com/package/express.
- The dotenv module is used to handle database credentials. Documentation is available under: https://www.npmjs.com/package/dotenv
- Heroku is in use to host the application. Documentation: https://devcenter.heroku.com/categories/reference
- The application is using the Heroku add-on "JawsDB" for the SQL database integration. Documentation available under: https://www.jawsdb.com/docs/
- Bootstrap is used to facilitate a the mobile-first setup of the application. Documentation under: https://getbootstrap.com/docs/4.1/getting-started/introduction/
- Google Fonts is in use for the display fonts. More information available under: https://fonts.google.com/about

 [Back To The Top](#table-of-contents)

  ---

 
  ## The team behind TravelMag
  - Marcel ([Github](http://github.com/cestmarcel) & [Website](https://marcelthiemann.com))
  - Etam ([Github](https://github.com/etammao))
  - Damon ([Github](https://github.com/Damon-Zhong))
  - Sadia ([Github](https://github.com/sadia110)) 

 [Back To The Top](#table-of-contents)

  ---

  ## License

  MIT License

  Copyright (c) [2020] [coMeDia]

  Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

  [Back To The Top](#table-of-contents)
