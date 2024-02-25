var startGameEl = document.querySelector("#start-game");
var questions = document.querySelector("#questions"); 
var intro = document.querySelector("#intro");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var resultEl = document.querySelector("#results")
var timerEl = document.querySelector("#timer");

var timer = 20; 

var question = [
    {
        question:"What is the capital of India?",
        choices: ["Dubai", "Buenos Aires", "Delilah", "New Delhi"],
        answer: "New Delhi",
    },
    {
        question:"What is the name of the largest ocean in the world?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Artic Ocean"],
        answer: "Pacific Ocean",
    },
    {
        question:"What is the name of the smallest country in the world by area?",
        choices: ["Puerto Rico", "Vatican City", "Aruba", "Mykonos"],
        answer: "Vatican City",
    },
    {
        question:"What is the name of the plane with the most rings?",
        choices: ["Saturn", "Venus", "Venus and Saturn", "None"],
        answer: "Saturn",
    },

];

var questionIndex = 0;

function startTimer () {
    setInterval(function() {
    if (timer>0) {
        timer--;
        timerEl.textContent = timer;
    } else {
        endGame();
    }
}, 1000);
}

    

function startGame() {
    intro.setAttribute("class", "hide");
    updateQuestion();  
    questions.setAttribute("class", "show");
    timerEl.setAttribute("class", "show");
    startTimer();

}

function updateQuestion() {
    if (questionIndex === question.length) {
        setTimeout(endGame, 1500); 
        return;
    } 

    questionEl.textContent= question[questionIndex].question;
    choicesEl.innerHTML = ""; 
    resultEl.innerHTML = "";

    for (var i = 0; i < question[questionIndex].choices.length; i++) {
        var element = document.createElement("li");
        element.textContent = question[questionIndex].choices[i];
        choicesEl.appendChild(element);

    }
    
}

function endGame () {
    questions.setAttribute("class", "hide");
    resultEl.textContent = "Time's Up!";
    timerEl.setAttribute = ("class", "hide");

}

choicesEl.addEventListener("click", function (event) {
    var target = event.target;

    if (target.matches("li")) {
        if (target.textContent === question[questionIndex].answer) {
            resultEl.textContent = "Correct!";               
        } else {
            resultEl.textContent = "Incorrect!";
        }

        questionIndex++;
        setTimeout(updateQuestion,1500);

    }
} );

startGameEl.addEventListener("click", startGame); 