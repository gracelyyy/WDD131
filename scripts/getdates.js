<script src="scripts/getdates.js" defer></script>

const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;
