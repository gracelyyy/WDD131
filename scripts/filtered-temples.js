const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893",
    area: 253000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919",
    area: 42000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple.jpg"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004",
    area: 17500,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017",
    area: 44000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019",
    area: 41000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple.jpg"
  },
  {
    name: "Nauvoo Temple",
    location: "Illinois, USA",
    dedicated: "1846",
    area: 54000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-temple.jpg"
  },
  {
    name: "Hong Kong Temple",
    location: "Hong Kong, China",
    dedicated: "1996",
    area: 21000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-temple.jpg"
  },
  {
    name: "Mexico City Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983",
    area: 116000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-temple.jpg"
  },
  {
    name: "Colonia Juarez Temple",
    location: "Mexico",
    dedicated: "1895",
    area: 6800,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-temple.jpg"
  }
];

const container = document.getElementById("temple-container");

function displayTemples(templesList) {
  container.innerHTML = "";

  templesList.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${temple.name}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.image}" alt="${temple.name}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// FILTER FUNCTION
function filterTemples(type) {
  let filtered = [];

  switch(type) {
    case "old":
      filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
      break;
    case "new":
      filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  displayTemples(filtered);
}

// LOAD ALL ON START
displayTemples(temples);

// FOOTER
document.getElementById("copyright").textContent =
  `© ${new Date().getFullYear()}`;

document.getElementById("lastModified").textContent =
  `Last Modified: ${document.lastModified}`;
