async function getCityList() {
    // Assemble list of cities
    var cityList = [];
    // Execute function to populate array
    cityList = await fetch(`/api/cities/list`).then(result => result.json());
    // Iterate over all cities
    if (window.location.pathname == '/') {
        cityList.forEach(city => {
            getCityInfo(city.url);
            // Write cities in dropdown
            document.querySelector("#dropdown").innerHTML += `
        <a class="dropdown-item" href="/destinations/${city.url}">${city.city_name}</a>`
        });
    } else {
        cityList.forEach(city => {
            // Write cities in dropdown
            document.querySelector("#dropdown").innerHTML += `
              <a class="dropdown-item" href="/destinations/${city.url}">${city.city_name}</a>`
        });
    }
}

async function getCityInfo(cityUrl) {
    //Retrieve city data from database
    const result = await fetch(`/api/data?url=${cityUrl}`).then(result => result.json())
    //Pick a city view picture from Pexel
    const picData = await fetch(`/api/pic/${result.city_name}`).then(result => result.json())
    // Hide loading spinner
    document.querySelector("#spinner").style = "display: none";
    //render city info
    document.querySelector("#city_info").innerHTML += `
      <div class="col-sm-4 mt-4">
        <div class="card" style="width: 100%;">
          <h5 class="card-title pt-2 pl-3">${result.city_name}, ${result.city_country}</h5>
          <div style="background-image: url(${picData.src.medium})" class="card-image" alt="${result.city_name}"></div>
          <div class="card-body">
            <a href="/destinations/${cityUrl}" class="btn btn-primary btn-block">Let's go</a>
          </div>
        </div>
      </div>`
}

async function searchCities(event) {
    event.preventDefault();
    var userInput = document.getElementById("search-box").value;
    let response = await fetch(`/api/search/?q=${userInput}`)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then(function (data) {
                    if (data.length == 1) {
                        var city = data[0];
                        window.location.href = `/destinations/${city.url}`;
                    } else if (data.length > 1) {
                        $('#cityChoiceModal').modal();
                        document.getElementById("modal-body").innerHTML =
                            `<p>We've found multiple cities that match your query, please choose:</p>`
                        data.forEach(city => {
                            document.getElementById("modal-body").innerHTML +=
                                `<p><a href="/destinations/${city.url}" alt="Details on ${city.city_name}">${city.city_name}</a></p>`
                        });
                    } else {
                        $('#cityChoiceModal').modal();
                        document.getElementById("modal-body").innerHTML =
                            `<p>We couldn't find a city that matches your query in our database.
                    <br><br>
                    Do you or someone you know want to add the city? Go <a href="/submit" 
                    alt="Add city">here</a> to enter the city's details.<p>`
                    }
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

async function renderCityPage() {
    // Render destination dropdown
    getCityList();
    // Get city name from url path
    var pathArray = window.location.pathname.split('/');
    var cityUrl = pathArray[2];
    //Retrieve data from database based on city ID
    const data = await fetch(`/api/data?url=${cityUrl}`).then(result => result.json())
    //generate city header
    getCityHeader(data.city_name);
    //update hotel info
    document.querySelector("#hotels").innerHTML = `
    <img class="card-img-top" src="/Assets/city-page/hotel${Math.ceil(Math.random() * 3)}.jpg" alt="Card image">
    <div class="card-body text-center">
      <h5 class="card-title">Best Hotels</h5>
      <p class="card-text">${data.hotels_headline} </p>
      <a href=${data.hotels_link} target="_blank" class="btn btn-primary btn-block">Check it out!</a>
    </div>
  `
    //update restaurant info
    document.querySelector("#restaurants").innerHTML = `
    <img class="card-img-top" src="/Assets/city-page/restaurant${Math.ceil(Math.random() * 3)}.jpg" alt="Card image">
    <div class="card-body text-center">
      <h5 class="card-title">Top Places to Eat</h5>
      <p class="card-text">${data.eats_headline} </p>
      <a href=${data.eats_link} target="_blank" class="btn btn-primary btn-block">Check it out!</a>
    </div>
  `
    //update free section
    document.querySelector("#free").innerHTML = `
    <img class="card-img-top" src="/Assets/city-page/fun${Math.ceil(Math.random() * 3)}.jpg" alt="Card image">
    <div class="card-body text-center">
      <h5 class="card-title">Try These for FREE!</h5>
      <p class="card-text">${data.free_headline} </p>
      <a href=${data.free_link} target="_blank" class="btn btn-primary btn-block">Check it out!</a>
    </div>
  `
    //update night life
    document.querySelector("#nightlife").innerHTML = `
    <img class="card-img-top" src="/Assets/city-page/club${Math.ceil(Math.random() * 3)}.jpg" alt="Card image">
    <div class="card-body text-center">
      <h5 class="card-title">Best Bars for Nightlife</h5>
      <p class="card-text">${data.nightlife_headline} </p>
      <a href=${data.nightlife_link} target="_blank" class="btn btn-primary btn-block">Check it out!</a>
    </div>
  `
    //update sights
    document.querySelector("#sights").innerHTML = `
    <img class="card-img-top" src="/Assets/city-page/sight${Math.ceil(Math.random() * 3)}.jpg" alt="Card image">
    <div class="card-body text-center"> 
      <h5 class="card-title">Exciting Sights</h5>
      <p class="card-text">${data.sights_headline}</p>
      <a href=${data.sights_link} target="_blank" class="btn btn-primary btn-block">Learn more</a>
    </div>
  `
    //update Bars
    document.querySelector("#bars").innerHTML = `
    <img class="card-img-top" src="/Assets/city-page/bar${Math.ceil(Math.random() * 3)}.jpg" alt="Card image">
    <div class="card-body text-center">
      <h5 class="card-title">Best Bars</h5>
      <p class="card-text">${data.bars_headline}</p>
      <a href=${data.bars_link} target="_blank" class="btn btn-primary btn-block">Learn more</a>
    </div>
  `
    //update Family acitivities
    document.querySelector("#family").innerHTML = `
    <img class="card-img-top" src="/Assets/city-page/family${Math.ceil(Math.random() * 3)}.jpg" alt="Card image">
    <div class="card-body text-center">
      <h5 class="card-title">Fun Family Activities</h5>
      <p class="card-text">${data.family_headline}</p>
      <a href=${data.family_link} target="_blank" class="btn btn-primary btn-block">Learn more</a>
    </div>
  `
    //update curator
    if(data.curator_name){
        document.querySelector("#curator-card").style = "display: block";
        document.querySelector("#curator").innerHTML = `
        <img class="card-img-top" src="/Assets/city-page/curator.jpg" alt="Card image">
        <div class="card-body text-center">
          <h5 class="card-title">Curator for this city: ${data.curator_name}</h5>
          <p class="card-text">${data.curator_bio}</p>
        </div>
      `
      }
    
    displayWeather(data.city_name)
}

async function getCityHeader(cityName) {
    //Pick a city view picture from Pexel
    const picData = await fetch(`/api/pic/${cityName}`).then(result => result.json())
    console.log(`Fetching from: /api/pic/${cityName}, result:`, picData)
    //render city header
    document.querySelector("#city-header").innerHTML = `
      <div id="city-picture" style="background-image: url(${picData.src.large})">
        <div id="city-copy" class="pt-2 pb-1">
          <div class="container">
            <h1 id="city_name">Welcome to ${cityName}!</h1>
            <p id="city_intro">Here's a curated selection of everything the city has to offer.</p>
          </div>
        </div>
      </div>`
}

async function displayWeather(cityName) {
    //Fetch data from Open Weather API
    const weatherInfo = await fetch(`/api/weather/${cityName}`).then((result) => result.json())
    // console.log(weatherInfo)
    document.querySelector('#weatherClass').innerHTML =
        `<h5 class="card-title">Weather in ${weatherInfo.name}
      <img src="http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png" width="50" height="50" alt="">
    </h5>
      <p class="card-text">Temperature: ${Math.round(weatherInfo.main.temp)} °C</p>
      <p class="card-text">Humidity: ${weatherInfo.main.humidity}%</p>
      <p class="card-text">Wind Speed: ${weatherInfo.wind.speed} km/h</p>`
}

async function checkFlight(event) {
    event.preventDefault()
    //retrieve user input
    const homecity = document.querySelector("#homeCity").value
    const homeCountry = document.querySelector("#homeCountry").value
    const destinationCity = document.querySelector('#destinationCity').value
    const destinationCountry = document.querySelector('#destinationCountry').value
    const departDate = document.querySelector("#departdate").value
    const returnDate = document.querySelector("#returndate").value
    console.log(`homecity:${homecity}, destinationCity: ${destinationCity} depart:${departDate}, return:${returnDate}`)
    //fetch data from API 
    const flightPrice = await fetch(`/api/flightquote/${homecity}/${homeCountry}/${destinationCity}/${destinationCountry}/${departDate}/${returnDate}`).then( response => response.json() )
    
    //hide the input section and show price section
    if ( flightPrice == false ) {
        console.log(`No flights available.`)
        document.querySelector("#flightIDInfor").innerHTML = `
            <div id="flightPrice">         
                <p>Important: This destination may have COVID-19 travel restrictions in place, including specific restrictions for lodging. Check any national, local, and health advisories for this destination before you book.</p>
                <p>We've searched more than 400 airlines, but couldn't find any flights.</p>
                <button type="submit" class="btn btn-info" onClick="window.location.reload()">&#128549; Try it again?</button>
            </div>`

    } else if( flightPrice.status == false ){
        console.log(`City name not found.`)
        document.querySelector("#flightIDInfor").innerHTML = `
            <div id="flightPrice">         
                <p>${flightPrice.message}</p>
                <button type="submit" class="btn btn-info" onClick="window.location.reload()">&#128549; Try it again?</button>
            </div>`

    }else{
        console.log(`Flights available.`)
        document.querySelector("#flightIDInfor").innerHTML = `
            <div id="flightPrice">
                <h5>Lowest Flight Price</h5>
                <p>Travelling from ${homecity},${homeCountry} to ${destinationCity}, ${destinationCountry}</p>
                <p>Departure at: ${departDate}</p>
                <p>Return at: ${returnDate}</p>
                <p>Lowest Price: $ ${flightPrice.body.MinPrice} </p>
                <a class="btn btn-info" href=${flightPrice.skyscanner_link} target="_blank">Check it out on Skyscanner</a>
            </div>`
    }
}

