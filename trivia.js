function displayDate() {
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    var formattedDate = date.toLocaleDateString('en-US', options);
    document.getElementById('date').innerHTML = "<p>Today is: " + formattedDate + "</p>";
}


function createGreeting() {
    var hour = new Date().getHours();
    var greeting;

    
    switch (true) {
        case hour < 12:
            greeting = "Good Morning";
            break;
        case hour < 18:
            greeting = "Good Afternoon";
            break;
        default:
            greeting = "Good Evening";
            break;
    }

    
    var name = prompt("Please enter your name:");
    name = name.charAt(0).toUpperCase() + name.slice(1); 

    
    document.getElementById('greeting').innerHTML = "<p>" + greeting + ", " + name + "!</p>";
}


function validateEmail() {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var email;

    do {
        email = prompt("Please enter your email address:");
        if (!emailRegex.test(email)) {
            alert("Invalid email address. Please try again.");
        }
    } while (!emailRegex.test(email));

    
    var emailParts = email.split('@');
    var username = emailParts[0];
    var domain = emailParts[1];
    document.getElementById('email-info').innerHTML =
        "<p>Username: " + username.toUpperCase() + "</p>" +
        "<p>Domain: " + domain + "</p>";
}


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
createGreeting();
validateEmail();
displayDate();
quiz();
