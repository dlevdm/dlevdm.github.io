// dle code
weatherAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&exclude=hourly,minutely&units=imperial&appid=0bed6e620de12605a6ab3e2bf045d31d";

fetch(weatherAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);

        const desc = jsObject.current.weather[0].description;
        const tempF = jsObject.current.temp;
        document.getElementById('temperatureinput').textContent = Math.round(tempF);
        document.getElementById('weatherdescription').textContent = desc;
        document.getElementById('weatherhumidity').textContent = jsObject.current.humidity;
        
        if (jsObject.alerts != null) {
            document.getElementById('alertarea').innerHTML = jsObject.alerts.description;
        }
    });

function closebutton() {
    document.querySelector(".weatheralert").style.display = "none";
}