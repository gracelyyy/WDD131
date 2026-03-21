const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

const temp = 8; // °C
const windSpeed = 10; // km/h

function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

let windChill = "N/A";

if (temp <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temp, windSpeed) + " °C";
}

document.getElementById("windchill").textContent = windChill;
