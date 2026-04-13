document.addEventListener("DOMContentLoaded", () => {

  const temples = [
    {
      name: "Salt Lake Temple",
      location: "Utah, USA",
      dedicated: 1893,
      area: 253000,
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Salt_Lake_Temple%2C_Utah_-_Sept_2004-2.jpg"
    },
    {
      name: "Laie Hawaii Temple",
      location: "Hawaii, USA",
      dedicated: 1919,
      area: 42000,
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Laie_Hawaii_Temple.jpg"
    },
    {
      name: "Accra Ghana Temple",
      location: "Ghana",
      dedicated: 2004,
      area: 17500,
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Accra_Ghana_Temple.jpg"
    },
    {
      name: "Paris France Temple",
      location: "France",
      dedicated: 2017,
      area: 44000,
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Paris_France_Temple.jpg"
    },
    {
      name: "Rome Italy Temple",
      location: "Italy",
      dedicated: 2019,
      area: 41000,
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Rome_Italy_Temple.jpg"
    },
    {
      name: "Nauvoo Temple",
      location: "Illinois, USA",
      dedicated: 1846,
      area: 54000,
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Nauvoo_Temple.jpg"
    },
    {
      name: "Hong Kong Temple",
      location: "China",
      dedicated: 1996,
      area: 21000,
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Hong_Kong_Temple.jpg"
    },
    {
      name: "Mexico City Temple",
      location: "Mexico",
      dedicated: 1983,
      area: 116000,
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Mexico_City_Temple.jpg"
    },
    {
      name: "Colonia Juarez Temple",
      location: "Mexico",
      dedicated: 1895,
      area: 6800,
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Colonia_Juarez_Temple.jpg"
    }
  ];

  const container = document.getElementById("temple-container");

  function displayTemples(list) {
    container.innerHTML = "";

    list.forEach(t => {
      container.innerHTML += `
        <div class="card">
          <h2>${t.name}</h2>
          <p><strong>Location:</strong> ${t.location}</p>
          <p><strong>Dedicated:</strong> ${t.dedicated}</p>
          <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
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
