// Assemble list of cities
var cityList = [];
// Execute function to populate array
async function getCityList() {
    cityList = await fetch(`/api/cities/list`).then(result => result.json());
    // Iterate over all cities
    cityList.forEach(city => {
        getCityInfo(city.id);
        // Write cities in dropdown
        document.querySelector("#dropdown").innerHTML += `
        <a class="dropdown-item" href="/cities.html#${city.id}">${city.city_name}</a>`
    });
}


async function getCityInfo(cityId) {
    //Retrieve city data from database
    const result = await fetch(`/api/data?id=${cityId}`).then(result => result.json())
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
            <a href="/cities.html#${cityId}" class="btn btn-primary btn-block">Let's go</a>
          </div>
        </div>
      </div>`
}


async function searchCities(event) {
    event.preventDefault();
    var userInput = document.getElementById("search-box").value;
    let response = await fetch(`/api/search/?q=${userInput}`)
        .then(
<<<<<<< HEAD
            function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }
            response.json().then(function(data) {
                if(data.length == 1){
                    var city = data[0];
                    window.location.href = `/cities.html#${city.id}`;
                } else if(data.length > 1) {
                    $('#cityChoiceModal').modal();
                    document.getElementById("modal-body").innerHTML =
                    `<p>We've found multiple cities that match your query, please choose:</p>`
                    data.forEach(city => {
                        document.getElementById("modal-body").innerHTML +=
                        `<p><a href="/cities.html#${city.id}" alt="Details on ${city.city_name}">${city.city_name}</a></p>`
                    });
                } else {
                    $('#cityChoiceModal').modal();
                    document.getElementById("modal-body").innerHTML =
                    `<p>We couldn't find a city that matches your query in our database.
=======
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                response.json().then(function (data) {
                    if (data.length == 1) {
                        var city = data[0];
                        window.location.replace(`/cities.html#${city.id}`);
                    } else if (data.length > 1) {
                        $('#cityChoiceModal').modal();
                        document.getElementById("modal-body").innerHTML =
                            `<p>We've found multiple cities that match your query, please choose:</p>`
                        data.forEach(city => {
                            document.getElementById("modal-body").innerHTML +=
                                `<p><a href="/cities.html#${city.id}" alt="Details on ${city.city_name}">${city.city_name}</a></p>`
                        });
                    } else {
                        $('#cityChoiceModal').modal();
                        document.getElementById("modal-body").innerHTML =
                            `<p>We couldn't find a city that matches your query in our database.
>>>>>>> develop
                    <br><br>
                    Do you or someone you know want to add the city? Go <a href="/submitCity.html" 
                    alt="Add city">here</a> to enter the city's details.<p>`
                    }
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

async function renderCityPage(){
    
}