const services = [
  { name: "Wig Install", price: "R150" },
  { name: "Braids", price: "R200" }
];

function displayServices() {
  const container = document.getElementById("servicesList");

  if (container) {
    services.forEach(service => {
      container.innerHTML += `<p>${service.name} - ${service.price}</p>`;
    });
  }
}

function populateSelect() {
  const select = document.getElementById("service");

  if (select) {
    services.forEach(service => {
      select.innerHTML += `<option>${service.name}</option>`;
    });
  }
}

function handleForm() {
  const form = document.getElementById("bookingForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;

      if (name === "") {
        alert("Name required");
        return;
      }

      localStorage.setItem("booking", name);
      alert("Booking saved!");
    });
  }
}

function showReviews() {
  const reviewDiv = document.getElementById("reviews");

  if (reviewDiv) {
    const booking = localStorage.getItem("booking");

    if (booking) {
      reviewDiv.innerHTML = `<p>${booking} booked a service!</p>`;
    }
  }
}

displayServices();
populateSelect();
handleForm();
showReviews();
