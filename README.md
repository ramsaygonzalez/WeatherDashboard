# WeatherDashboard
Unit 6 homework.  Server-side APIs.

Application Goal:
The goal with this application is to provide the user the ability to enter a city name into a search field and then generate several outputs providing weather information for the desired city after a button is clicked.  The user will also be provided a history of the cities that have been searched which can then be selected to initiate a new search for the city which has been clicked.  

Outputs:
The application will provide the user with the following information:
    - Search history
    - Current Weather forecast with the following information:
        - City
        - Date
        - Wx Icon
        - Temp (F)
        - Humidity
        - Wind Speed
        - UV Index
    - 5 day weather forecast  with the following information:
        - Date
        - Wx Icon
        - Temp (F)
        - Humidity

APIs Used
To power this application data has been pulled from the www.openweathermap.org APIs listed below using Ajax calls:
    -  Current WX by city name - https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
    -  5 day forecast by city name - https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
    -  UV Index by lat & lon - https://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}

Progress Notes:
- all the required elements have been created in HTML. Utilized bootstrap for containers.  
    - styling is still required for most HTML elements
- js code required to make all ajax API calls complete.
- js code to generate html elements from data pulled in API call is complete.
- local storage working and list is generated for each search
    - need to code the ability to have page load with local storage items.
    - need to add the ability to click on local storage item to update api calls


