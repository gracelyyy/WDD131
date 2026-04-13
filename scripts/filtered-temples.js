document.addEventListener("DOMContentLoaded", () => {

  const temples = [
    { name: "Salt Lake Temple", location: "Utah, USA", dedicated: "1893", area: 253000, image: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple.jpg" },
    { name: "Laie Hawaii Temple", location: "Hawaii, USA", dedicated: "1919", area: 42000, image: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple.jpg" },
    { name: "Accra Ghana Temple", location: "Ghana", dedicated: "2004", area: 17500, image: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple.jpg" },
    { name: "Paris France Temple", location: "France", dedicated: "2017", area: 44000, image: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple.jpg" },
    { name: "Rome Italy Temple", location: "Italy", dedicated: "2019", area: 41000, image: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple.jpg" },
    { name: "Nauvoo Temple", location: "Illinois, USA", dedicated: "1846", area: 54000, image: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-temple.jpg" },
    { name: "Hong Kong Temple", location: "China", dedicated: "1996", area: 21000, image: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-temple.jpg" },
    { name: "Mexico City Temple", location: "Mexico", dedicated: "1983", area: 116000, image: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-temple.jpg" },
    { name: "Colonia Juarez Temple", location: "Mexico", dedicated: "1895", area: 6800, image: "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-temple.jpg" }
  ];

  const container = document.getElementById("temple-container");

  function displayTemples(list) {
    container.innerHTML = "";
    list.forEach(t => {
      container.innerHTML += `
        <div class="card">
          <h2>${t.name}</h2>
          <p>${t.location}</p>
          <p>Dedicated: ${t.dedicated}</p>
          <p>Area: ${t.area.toLocaleString()} sq ft</p>
          <img src="${t.image}" alt="${t.name}" loading="lazy">
        </div>
      `;
    });
  }

  function filterTemples(type) {
    if (type === "old") {
      displayTemples(temples.filter(t => t.dedicated < 1900));
    } else if (type === "new") {
      displayTemples(temples.filter(t => t.dedicated > 2000));
    } else if (type === "large") {
      displayTemples(temples.filter(t => t.area > 90000));
    } else if (type === "small") {
      displayTemples(temples.filter(t => t.area < 10000));
    } else {
      displayTemples(temples);
    }
  }

  document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      filterTemples(btn.id);
    });
  });

  displayTemples(temples);

  document.getElementById("copyright").textContent =
    `© ${new Date().getFullYear()}`;

  document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

});
