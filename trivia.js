function displayDate() {
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    var formattedDate = date.toLocaleDateString('en-US', options);
    document.getElementById('date').innerHTML = "<p>Today is: " + formattedDate + "</p>";
}

// Function to create a personalized greeting
function createGreeting() {
    var hour = new Date().getHours();
    var greeting;

    // Use a switch statement to determine the appropriate greeting
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

    // Prompt the user for their name
    var name = prompt("Please enter your name:");
    name = name.charAt(0).toUpperCase() + name.slice(1); // Capitalize the first letter

    // Display the greeting with the user's name
    document.getElementById('greeting').innerHTML = "<p>" + greeting + ", " + name + "!</p>";
}

// Function to validate an email address using a regular expression
function validateEmail() {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var email;

    do {
        email = prompt("Please enter your email address:");
        if (!emailRegex.test(email)) {
            alert("Invalid email address. Please try again.");
        }
    } while (!emailRegex.test(email));

    // Split the email into username and domain
    var emailParts = email.split('@');
    var username = emailParts[0];
    var domain = emailParts[1];
    document.getElementById('email-info').innerHTML =
        "<p>Username: " + username.toUpperCase() + "</p>" +
        "<p>Domain: " + domain + "</p>";
}

// Function to display a random quote of the day
function displayQuote() {
    var quotes = [
        "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        "In the middle of every difficulty lies opportunity. – Albert Einstein",
        "The best way to predict the future is to create it. – Peter Drucker",
        "Believe you can and you're halfway there. – Theodore Roosevelt"
    ];

    var randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = "<p>Quote of the Day: " + quotes[randomIndex] + "</p>";
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
displayQuote();
quiz();
