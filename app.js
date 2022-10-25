document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch(city) {
    let key = "b9b27e0c6774d5bc94269cbec554bdbe"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            console.log(data)
            drawWeather(data)
        })
        .catch(function() {

        });
}

function cityWeather() {
    weatherDataFetch("Tallinn")
}

function drawWeather(data) {
    let celsius = Math.round(parseFloat(data.main.temp)-273.15)
    let description = data.weather[0].description

    document.querySelector("#description").innerHTML = description
    console.log(celsius + "&deg;")
    document.querySelector("#temp").innerHTML = celsius + "&deg;"
    document.querySelector("#location").innerHTML = data.name
}