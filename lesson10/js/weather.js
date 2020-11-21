// dle code

if (document.getElementById("weathername").innerHTML.indexOf("Preston") != -1) {
    weatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=0bed6e620de12605a6ab3e2bf045d31d";
} else if (document.getElementById("weathername").innerHTML.indexOf("Soda") != -1) {
    weatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=0bed6e620de12605a6ab3e2bf045d31d";
} else {
    weatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=0bed6e620de12605a6ab3e2bf045d31d";
}

fetch(weatherAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('temperatureinput').textContent = jsObject.main.temp;
        document.getElementById('weatherdescription').textContent = desc;
        document.getElementById('weatherhumidity').textContent = jsObject.main.humidity;
        document.getElementById('windspeedinput').textContent = jsObject.wind.speed;
    });