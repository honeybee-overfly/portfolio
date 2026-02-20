const goals = [
    "HTMLを理解する",
    "CSSを理解する",
    "JSでボタンを動かす",
    "GitHunにアップロードする",
    "明日の学習計画を立てる"
];

const button = document.getElementById("goalBtn");
const goalText = document.getElementById("goalText");

button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * goals.length);
    goalText.textContent = goals[randomIndex];
});
