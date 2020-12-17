// dle code
apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&exclude=hourly,minutely&units=imperial&appid=0bed6e620de12605a6ab3e2bf045d31d";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        //const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        //console.log(forecast);
        const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
        const d = new Date();

        for (let day = 0; day < 3; day++) {
            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.daily[day].weather[0].icon + '.png';
            const desc = jsObject.daily[day].weather[0].description;
            document.getElementById("dayofweek" + (day + 1)).textContent = weekdays[d.getDay() + (day)];
            document.getElementById("forecast" + (day + 1)).innerHTML = Math.round(jsObject.daily[day].temp.day) + " &#176;F";
            document.getElementById("icon" + (day + 1)).setAttribute('src', imagesrc);
            document.getElementById("icon" + (day + 1)).setAttribute('alt', desc);
        }
    });