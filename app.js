document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch(city) {
    var key = "b9b27e0c6774d5bc94269cbec554bdbe"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            console.log(data)
        })
        .catch(function() {

        });
}

function cityWeather(e) {
    weatherDataFetch("Tallinn")
}