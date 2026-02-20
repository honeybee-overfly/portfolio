const goals = [
    "Improve HTML structure",
    "Practice CSS layout",
    "Add new section to portfolio",
    "Study JavaScript basics",
    "Plan tomorrow's learning"
];

const button = document.getElementById("goalBtn");
const goalText = document.getElementById("goalText");

button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * goals.length);
    goalText.textContent = goals[randomIndex];
});
