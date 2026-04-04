const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "1893-04-06",
        area: 253000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-377.jpg"
    },
    {
        name: "Laie Hawaii Temple",
        location: "Laie, Hawaii",
        dedicated: "1919-11-27",
        area: 42100,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-761.jpg"
    },
    {
        name: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004-01-11",
        area: 17500,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-755.jpg"
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 41000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-5087.jpg"
    },
    {
        name: "Paris France Temple",
        location: "Paris, France",
        dedicated: "2017-05-21",
        area: 44000,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-4023.jpg"
    },
    {
        name: "Manti Utah Temple",
        location: "Manti, Utah",
        dedicated: "1888-05-21",
        area: 74792,
        image: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-1378.jpg"
    }
];

// DISPLAY FUNCTION
function displayTemples(templeList) {
    const container = document.getElementById("temple-container");
    container.innerHTML = "";

    templeList.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${temple.name}</h2>
            <p>${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.image}" alt="${temple.name}" loading="lazy">
        `;

        container.appendChild(card);
    });
}

// FILTER FUNCTION
function filterTemples(type) {
    let filtered = temples;

    if (type === "old") {
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    } 
    else if (type === "new") {
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    } 
    else if (type === "large") {
        filtered = temples.filter(t => t.area > 90000);
    } 
    else if (type === "small") {
        filtered = temples.filter(t => t.area < 10000);
    }

    displayTemples(filtered);
}

// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

// INITIAL LOAD
displayTemples(temples);
