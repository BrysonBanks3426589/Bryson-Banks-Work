var questions = [
    ["How many suns do we have?", 0, "One", "Two", "Three"],
    ["What are order of mammals are rats from?", 2, "Carnivora", "Primates", "Rodent"], 
    ["What dog is very smart?", 1, "Bulldog", "Border Collie", "Rottweiler"]
];

var questionCounter = 0;

function initializeGame() {
    document.getElementById("prompt").innerHTML = "<button onclick='playGame()'>Play Game</button>";
}


function playGame() {
    document.getElementById("question").textContent = "Game started!";
}