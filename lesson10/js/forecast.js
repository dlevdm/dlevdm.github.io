// dle code

if (document.getElementById("weathername").innerHTML.indexOf("Preston") != -1) {
    apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=0bed6e620de12605a6ab3e2bf045d31d";
} else if (document.getElementById("weathername").innerHTML.indexOf("Soda") != -1) {
    apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=0bed6e620de12605a6ab3e2bf045d31d";
} else {
    apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=0bed6e620de12605a6ab3e2bf045d31d";
}

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        // console.log(forecast);
        const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];

        for (let day = 0; day < forecast.length; day++) {
            const d = new Date(forecast[day].dt_txt);
            const imagesrc = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
            const desc = forecast[day].weather[0].description;
            document.getElementById("dayofweek" + (day + 1)).textContent = weekdays[d.getDay()];
            document.getElementById("forecast" + (day + 1)).innerHTML = forecast[day].main.temp + " &#176;F";
            document.getElementById("icon" + (day + 1)).setAttribute('src', imagesrc);
            document.getElementById("icon" + (day + 1)).setAttribute('alt', desc);
        }
    });