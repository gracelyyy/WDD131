const tips = [
    { id: 1, title: "Choose a Niche", description: "Focus on one topic to attract a loyal audience." },
    { id: 2, title: "Post Consistently", description: "Upload content regularly to stay relevant." },
    { id: 3, title: "Engage With Followers", description: "Reply to comments and messages to build trust." },
    { id: 4, title: "Use Hashtags", description: "Use relevant hashtags to reach more people." }
];

function displayTips() {
    const container = document.getElementById("tips-container");

    tips.forEach(tip => {
        const tipCard = `
            <div class="card">
                <h3>${tip.title}</h3>
                <p>${tip.description}</p>
                <button onclick="saveTip(${tip.id})">Save Tip</button>
            </div>
        `;
        container.innerHTML += tipCard;
    });
}

function saveTip(id) {
    let saved = JSON.parse(localStorage.getItem("savedTips")) || [];

    // CHECK if already saved
    if (!saved.includes(id)) {
        saved.push(id);
        localStorage.setItem("savedTips", JSON.stringify(saved));
        alert("Tip saved!");
        displaySavedTips();
    } else {
        alert("Tip already saved!");
    }
}

function displaySavedTips() {
    const savedContainer = document.getElementById("saved-tips");
    let saved = JSON.parse(localStorage.getItem("savedTips")) || [];

    savedContainer.innerHTML = "";

    saved.forEach(id => {
        const tip = tips.find(t => t.id === id);

        if (tip) {
            savedContainer.innerHTML += `
                <p>✔ ${tip.title}</p>
            `;
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayTips();
    displaySavedTips();
});
