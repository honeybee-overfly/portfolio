const goals = [
    "Practice drawing for 30 minutes",
    "Learn one new TypeScript concept",
    "Push something to GitHub",
    "Study CSS layouts",
    "Sketch a new idea"
];

const goalBtn = document.getElementById("goalBtn");
const goalText = document.getElementById("goalText");

goalBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * goals.length);
    goalText.textContent = goals[randomIndex];
});