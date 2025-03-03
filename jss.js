
var questions = [
    "Who is Batman?",
    "What is texas known for?",
    "Who is my favorite brawler in brawl stars? (hint: she's in the same trio as Bo and Leon)",
];


var answers = [
    "Bruce Wayne",
    "Barbecue",
    "Nita",
];

var currentQuestion = 0;
var score = 0;


function displayQuestion() {
    var quizDiv = document.getElementById("quiz");
    if (currentQuestion < questions.length) {
        quizDiv.innerHTML = `
            <p>${questions[currentQuestion]}</p>
            <input type="text" id="user-answer" placeholder="Your answer">
            <button onclick="checkAnswer()">Submit</button>
        `;
    } else {
        
        quizDiv.innerHTML = "";
        document.getElementById("result").innerHTML = `
            <p>Your final score is: <span class="score">${score}</span></p>
        `;
    }
}


function checkAnswer() {
    var userAnswer = document.getElementById("user-answer").value.trim();
    if (userAnswer.toLowerCase() === answers[currentQuestion].toLowerCase()) {
        score += 3; 
    }
    currentQuestion++; 
    displayQuestion(); 
}

displayQuestion();
