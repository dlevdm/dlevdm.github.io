const tempF = parseFloat(document.getElementById('temperatureinput').value);
const speed = parseFloat(document.getElementById('windspeedinput').value);
const wcf = 35.74 + 0.6215 * tempF - 35.75 * (speed ** 0.16) + 0.4275 * tempF * (speed ** 0.16);

if (tempF <= 50 && speed > 3) {
    document.getElementById('windchilloutput').innerHTML = `${wcf} &#176;F`;
} else {
    document.getElementById('windchilloutput').innerHTML = 'N/A';
}