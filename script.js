var APIKey = "15e6baf0e24eef095c6a896d731ad257";
var requestedCity = "miami";
var currentWXURL = "https://api.openweathermap.org/data/2.5/weather?q=" + requestedCity + "&appid=" + APIKey
var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + requestedCity + "&cnt=" + "&appid=" + APIKey
var today = new Date();

$.ajax({
    url: currentWXURL,
    method: "GET"
}).then(function (currentWX) {
    console.log(currentWX);
    console.log(currentWX.name + "(" + today + ")");
    // var tempF = (response.main.temp - 273.15) * 1.80 + 32
    console.log("Temperature: " + ((currentWX.main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F");
    console.log("Humidity: " + currentWX.main.humidity + " %");
    console.log("Wind Speed: " + currentWX.wind.speed + " MPH");
    console.log(currentWX.coord.lat);
    console.log(currentWX.coord.lon);
    console.log(currentWX.weather[0].icon);

    var UVIndexURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + currentWX.coord.lat + "&lon=" + currentWX.coord.lon;

    $.ajax({
        url: UVIndexURL,
        method: "GET"
    }).then(function (UVIndex) {
        console.log("UV Index: " + UVIndex.value);

        $.ajax({
            url: forecastURL,
            method: "GET"
        }).then(function (forecast) {
            console.log(forecast);
            console.log("Temperature: " + ((forecast.list[4].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F");
            console.log("Humidity: " + forecast.list[4].main.humidity + " %");
            console.log(forecast.list[4].weather[0].icon);
            console.log("Temperature: " + ((forecast.list[12].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F");
            console.log("Humidity: " + forecast.list[12].main.humidity + " %");
            console.log(forecast.list[12].weather[0].icon);
            console.log("Temperature: " + ((forecast.list[20].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F");
            console.log("Humidity: " + forecast.list[20].main.humidity + " %");
            console.log(forecast.list[20].weather[0].icon);
            console.log("Temperature: " + ((forecast.list[28].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F");
            console.log("Humidity: " + forecast.list[28].main.humidity + " %");
            console.log(forecast.list[28].weather[0].icon);
            console.log("Temperature: " + ((forecast.list[36].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F");
            console.log("Humidity: " + forecast.list[36].main.humidity + " %");
            console.log(forecast.list[36].weather[0].icon);

            // var indexRequired = [4, 12, 20, 28, 36];

            // for (let i = 0; i < forecast.list.length; i++) {
            //     if (forecast.list[i] = indexRequired) {
            //         console.log("yes")

            // }
            //     }

        })

    })
})


//http://openweathermap.org/img/w/variable.png