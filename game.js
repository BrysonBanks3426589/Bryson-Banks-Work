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
    if (questionCounter < questions.length) {
        var currentQuestion = questions[questionCounter];

    
        document.getElementById("question").textContent = currentQuestion[0];

    
        var answersDiv = document.getElementById("answers");
        answersDiv.innerHTML = "";

        for (var i = 2; i < currentQuestion.length; i++) {
            var answerButton = document.createElement("button");
            answerButton.textContent = currentQuestion[i];
            answerButton.onclick = (function(index) {
                return function() {
                    checkAnswer(index, currentQuestion[1]);
                };
            })(i - 2); 

            
            answersDiv.appendChild(answerButton);
        }

        
        questionCounter++;
    } else {

        document.getElementById("prompt").innerHTML = "<p>Game Over!</p><button onclick='location.reload()'>Restart Game</button>";
    }
}


function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }

    
    playGame();
}

window.onload = initializeGame;