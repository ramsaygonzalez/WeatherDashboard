
$("#city-search").on("click", function (event) {
    event.preventDefault();

    var APIKey = "15e6baf0e24eef095c6a896d731ad257";
    var requestedCity = $("#city-input").val().trim()
    var currentWXURL = "https://api.openweathermap.org/data/2.5/weather?q=" + requestedCity + "&appid=" + APIKey
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + requestedCity + "&cnt=" + "&appid=" + APIKey
    var today = new Date();

    var searchInput = document.querySelector("#city-input");
    var searchButton = document.querySelector("#city-search");
    var searchList = document.querySelector("#city-list");

    var searchHistory = [];

    var historyText = searchInput.value.trim();


    if (historyText === "") {
        return;
    }
    searchHistory.push(historyText);
    searchInput.value = "";

    localStorage.setItem("history", JSON.stringify(searchHistory))

    for (var i = 0; i < searchHistory.length; i++) {

        var list = searchHistory[i];

        var li = document.createElement("li");
        li.textContent = list;
        li.setAttribute("data-index", i);
        searchList.appendChild(li);
    }

    $.ajax({
        url: currentWXURL,
        method: "GET"
    }).then(function (currentWX) {

        var city = currentWX.name + " (" + today + ") ";
        var temp = "Temperature: " + ((currentWX.main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F";
        var humid = "Humidity: " + currentWX.main.humidity + " %";
        var wind = "Wind Speed: " + currentWX.wind.speed + " MPH";
        var lat = currentWX.coord.lat;
        var long = currentWX.coord.lon;
        var icon = currentWX.weather[0].icon;
        var iconURL = "http://openweathermap.org/img/w/" + icon + ".png"
        var iconImage = $("<img>").attr("src", "http://openweathermap.org/img/w/" + icon + ".png")

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

            $("#current-city").html("<h5>" + city);
            $("#current-city").append($("<img>").attr("src", "http://openweathermap.org/img/w/" + icon + ".png"));
            $("#current-temp").text(temp);
            $("#current-humid").text(humid);
            $("#current-wind").text(wind);
            $("#current-UVIndex").text(uvindex);

            console.log(uvindex);

            $.ajax({
                url: forecastURL,
                method: "GET"
            }).then(function (forecast) {
                var dayOneDate = forecast.list[4].dt_txt
                var dayOneTemp = "Temperature: " + ((forecast.list[4].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F";
                var dayOneHumid = "Humidity: " + forecast.list[4].main.humidity + " %";
                var dayOneIcon = forecast.list[4].weather[0].icon;
                var dayTwoDate = forecast.list[4].dt_txt
                var dayTwoTemp = "Temperature: " + ((forecast.list[12].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F";
                var dayTwoHumid = "Humidity: " + forecast.list[12].main.humidity + " %";
                var dayTwoIcon = forecast.list[12].weather[0].icon;
                var dayThreeDate = forecast.list[4].dt_txt
                var dayThreeTemp = "Temperature: " + ((forecast.list[20].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F";
                var dayThreeHumid = "Humidity: " + forecast.list[20].main.humidity + " %";
                var dayThreeIcon = forecast.list[20].weather[0].icon;
                var dayFourDate = forecast.list[4].dt_txt
                var dayFourTemp = "Temperature: " + ((forecast.list[28].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F";
                var dayFourHumid = "Humidity: " + forecast.list[28].main.humidity + " %";
                var dayFourIcon = forecast.list[28].weather[0].icon;
                var dayFiveDate = forecast.list[4].dt_txt
                var dayFiveTemp = "Temperature: " + ((forecast.list[36].main.temp - 273.15) * 1.80 + 32).toFixed(2) + " F";
                var dayFiveHumid = "Humidity: " + forecast.list[36].main.humidity + " %";
                var dayFiveIcon = forecast.list[36].weather[0].icon;

                $("#dayone-date").html("<h5>" + dayOneDate);
                $("#dayone-date").append($("<img>").attr("src", "http://openweathermap.org/img/w/" + dayOneIcon + ".png"));
                $("#dayone-temp").text(dayOneTemp);
                $("#dayone-humid").text(dayOneHumid);

                $("#daytwo-date").html("<h5>" + dayTwoDate);
                $("#daytwo-date").append($("<img>").attr("src", "http://openweathermap.org/img/w/" + dayTwoIcon + ".png"));
                $("#daytwo-temp").text(dayTwoTemp);
                $("#daytwo-humid").text(dayTwoHumid);

                $("#daythree-date").html("<h5>" + dayThreeDate);
                $("#daythree-date").append($("<img>").attr("src", "http://openweathermap.org/img/w/" + dayThreeIcon + ".png"));
                $("#daythree-temp").text(dayThreeTemp);
                $("#daythree-humid").text(dayThreeHumid);

                $("#dayfour-date").html("<h5>" + dayFourDate);
                $("#dayfour-date").append($("<img>").attr("src", "http://openweathermap.org/img/w/" + dayFourIcon + ".png"));
                $("#dayfour-temp").text(dayFourTemp);
                $("#dayfour-humid").text(dayFourHumid);

                $("#dayfive-date").html("<h5>" + dayFiveDate);
                $("#dayfive-date").append($("<img>").attr("src", "http://openweathermap.org/img/w/" + dayFiveIcon + ".png"));
                $("#dayfive-temp").text(dayFiveTemp);
                $("#dayfive-humid").text(dayFiveHumid);

                console.log(forecast)
                console.log(dayOneDate);
                console.log(dayOneTemp);
                console.log(dayOneHumid);
                console.log(dayOneIcon);
                console.log(dayTwoDate);
                console.log(dayTwoTemp);
                console.log(dayTwoHumid);
                console.log(dayTwoIcon);
                console.log(dayThreeDate);
                console.log(dayThreeTemp);
                console.log(dayThreeHumid);
                console.log(dayThreeIcon);
                console.log(dayFourDate);
                console.log(dayFourTemp);
                console.log(dayFourHumid);
                console.log(dayFourIcon);
                console.log(dayFiveDate);
                console.log(dayFiveTemp);
                console.log(dayFiveHumid);
                console.log(dayFiveIcon);

            })

        })
    })
})
// //http://openweathermap.org/img/w/variable.png