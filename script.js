
$("#city-search").on("click", function (event) {
    event.preventDefault();

    var APIKey = "15e6baf0e24eef095c6a896d731ad257";
    var requestedCity = $("#city-input").val().trim()
    var currentWXURL = "https://api.openweathermap.org/data/2.5/weather?q=" + requestedCity + "&appid=" + APIKey
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + requestedCity + "&cnt=" + "&appid=" + APIKey
    var today = new Date();

    $.ajax({
        url: currentWXURL,
        method: "GET"
    }).then(function (currentWX) {

        var city = currentWX.name + "(" + today + ")";
        var temp = "Temperature: " + ((currentWX.main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F";
        var humid = "Humidity: " + currentWX.main.humidity + " %";
        var wind = "Wind Speed: " + currentWX.wind.speed + " MPH";
        var lat = currentWX.coord.lat;
        var long = currentWX.coord.lon;
        var icon = currentWX.weather[0].icon;

        console.log(currentWX);
        console.log(city);
        console.log(temp);
        console.log(humid);
        console.log(wind);
        console.log(lat);
        console.log(long);
        console.log(icon);

        var UVIndexURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + currentWX.coord.lat + "&lon=" + currentWX.coord.lon;

        $.ajax({
            url: UVIndexURL,
            method: "GET"
        }).then(function (UVIndex) {
            var uvindex = "UV Index: " + UVIndex.value;

            console.log(uvindex);

            $.ajax({
                url: forecastURL,
                method: "GET"
            }).then(function (forecast) {
                var dayOneTemp = "Temperature: " + ((forecast.list[4].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F";
                var dayOneHumid = "Humidity: " + forecast.list[4].main.humidity + " %";
                var dayOneIcon = forecast.list[4].weather[0].icon;
                var dayTwoTemp = "Temperature: " + ((forecast.list[12].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F";
                var dayTwoHumid = "Humidity: " + forecast.list[12].main.humidity + " %";
                var dayTwoIcon = forecast.list[12].weather[0].icon;
                var dayThreeTemp = "Temperature: " + ((forecast.list[20].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F";
                var dayThreeHumid = "Humidity: " + forecast.list[20].main.humidity + " %";
                var dayThreeIcon = forecast.list[20].weather[0].icon;
                var dayFourTemp = "Temperature: " + ((forecast.list[28].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F";
                var dayFourHumid = "Humidity: " + forecast.list[28].main.humidity + " %";
                var dayFourIcon = forecast.list[28].weather[0].icon;
                var dayFiveTemp = "Temperature: " + ((forecast.list[36].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F";
                var dayFiveHumid = "Humidity: " + forecast.list[36].main.humidity + " %";
                var dayFiveIcon = forecast.list[36].weather[0].icon;

                console.log(forecast)
                console.log(dayOneTemp);
                console.log(dayOneHumid);
                console.log(dayOneIcon);
                console.log(dayTwoTemp);
                console.log(dayTwoHumid);
                console.log(dayTwoIcon);
                console.log(dayThreeTemp);
                console.log(dayThreeHumid);
                console.log(dayThreeIcon);
                console.log(dayFourTemp);
                console.log(dayFourHumid);
                console.log(dayFourIcon);
                console.log(dayFiveTemp);
                console.log(dayFiveHumid);
                console.log(dayFiveIcon);

            })

        })
    })
})
// //http://openweathermap.org/img/w/variable.png