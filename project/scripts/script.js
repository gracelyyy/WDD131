const tips = [
    { id: 1, title: "Choose a niche", description: "Focus on one topic." },
    { id: 2, title: "Post consistently", description: "Stay active online." },
    { id: 3, title: "Engage audience", description: "Reply to comments." },
    { id: 4, title: "Use hashtags", description: "Increase reach." }
];

function displayTips() {
    const container = document.getElementById("tips-container");

    if (!container) return;

    container.innerHTML = "";

    tips.forEach(tip => {
        container.innerHTML += `
            <div class="card">
                <h3>${tip.title}</h3>
                <p>${tip.description}</p>
                <button onclick="saveTip(${tip.id})">Save Tip</button>
            </div>
        `;
    });
}

function saveTip(id) {
    let saved = JSON.parse(localStorage.getItem("savedTips")) || [];

    if (!saved.includes(id)) {
        saved.push(id);
        localStorage.setItem("savedTips", JSON.stringify(saved));
    }

    displaySavedTips();
}

function displaySavedTips() {
    const container = document.getElementById("saved-tips");
    if (!container) return;

    let saved = JSON.parse(localStorage.getItem("savedTips")) || [];

    container.innerHTML = "";

    saved.forEach(id => {
        const tip = tips.find(t => t.id === id);
        if (tip) {
            container.innerHTML += `<p>✔ ${tip.title}</p>`;
        }
    });
}

/* FORM */
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("form-message");

        let count = localStorage.getItem("formCount") || 0;
        count++;

        localStorage.setItem("formCount", count);

        message.textContent = `Thank you ${name}! Submissions: ${count}`;

        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayTips();
    displaySavedTips();
});
