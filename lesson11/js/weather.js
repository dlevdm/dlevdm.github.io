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
        // console.log(jsObject);

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        const tempF = Math.round(jsObject.main.temp);
        const speed = Math.round(jsObject.wind.speed);
        document.getElementById('temperatureinput').textContent = tempF;
        document.getElementById('weatherdescription').textContent = desc;
        document.getElementById('weatherhumidity').textContent = jsObject.main.humidity;
        document.getElementById('windspeedinput').textContent = speed;

        let output = "N/A";
        if (tempF <= 50 && speed > 3) {
            let windchillfactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
            output = Math.round(windchillfactor) + " &#176;F";
        }
        document.getElementById("windchilloutput").innerHTML = output;
    });