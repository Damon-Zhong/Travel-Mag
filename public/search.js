async function searchCities(event){
    event.preventDefault();
    var userInput = document.getElementById("search-box").value;
    let response = await fetch(`/api/search/?q=${userInput}`)
        .then(
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
                    <br><br>
                    Do you or someone you know want to add the city? Go <a href="/addcity" 
                    alt="Add city">here</a> to enter the city's details.<p>`
                }
            });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}