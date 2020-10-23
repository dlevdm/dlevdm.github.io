    let tempF = parseFloat(document.getElementById("temperatureinput").textContent);
    let speed = parseFloat(document.getElementById("windspeedinput").textContent);
    let output = "N/A";
    if (tempF <= 50 && speed > 3) {
        let windchillfactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
        output = Math.round(windchillfactor) + "&#176;F";
    }
    document.getElementById("windchilloutput").innerHTML = output;

console.log(output); 

