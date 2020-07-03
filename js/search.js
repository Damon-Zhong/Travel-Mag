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
                console.log(data);
            });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}