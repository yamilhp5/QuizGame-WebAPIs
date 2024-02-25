var timer = 20;
//QuizQuestions 

var quizQuestionIndex = 0; 
var correctCounter = 0
var incorrectCounter = 0 
var storeName = 0;
var storeScore = 0; 
var initials = 0;
var startQuizEl = document.querySelector("#start-Quiz");
var quiz = document.querySelector(".quiz");
var startScreenEl = document.querySelector("#start-screen");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var resultEl = document.querySelector("#result");
var timerEl = document.querySelector("#timer");
var buttonEl = document.querySelector("#button");
var formEl = document.querySelector("#form");
var nameEl = document.querySelector("#name");
var scoreEl = document.querySelector("#score");
var scoreEl2 = document.querySelector(".score")


var quizQuestions = [
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
        choices: ["Puerto Rico", "VaticaN City", "Aruba", "Mykonos"],
        answer: "Vatican City",
    },
    {
        question:"What is the name of the plane with the most rings?",
        choices: ["Saturn", "Venus", "Venus and Saturn", "None"],
        answer: "Saturn",
    },

];

var quizQuestionIndex = 0;

function startTimer () {
    setInterval (function() {
        if (timer>0) {
            timer--;
            timerEl.textContent = timer;
        } else {
            endGame();

        }
    }, 1000);
}

function startQuiz() {
    startScreenEl.setAttribute("class", "hide")
    updateQuestion();
    quiz.setAttribute("class", "show")
    timerEl.setAttribute("class", "show")
    startTimer();    
}

function updateQuestion() {
    questionEl.textContent = quizQuestions[quizQuestionIndex].question;
    choicesEl.innerHTML = "";

    for (var i = 0; i < quizQuestions[quizQuestionIndex].choices.length; i++) {
        var listItem = document.createElement("li");
        var button = document.createElement("button");
        button.textContent = quizQuestions[quizQuestionIndex].choices[i];

        button.addEventListener("click", handleAn)
    }

}



function updateQuestion () {
    if (quizQuestionIndex === quizQuestions.length) {
        setTimeout(endGame, 1500);
        return;

    }


    questionEl.textContent = quizQuestions[quizQuestionIndex].question;
    choicesEl.innerHTML = "";
    resultEl.innerHTML = "";
    

    for (var i = 0; i < quizQuestions[quizQuestionIndex].choices.length; i++) {
        var element = document.createElement("li");
        element.textContent = quizQuestions[quizQuestionIndex].choices[i];
        choicesEl.appendChild(element);
    }

}

function endGame () {
    questions.setAttribute("class", "hide");
    resultEl.setAttribute ("Game Over");
    timerEl.setAttribute("class", "hide");
}

choicesEl.addEventListener("click", function (event) {
    var target = event.target;

    if (target.matches("li")) {
        if (target.textContent === quizQuestions[quizQuestionIndex].answer) {
            resultEl.textContent = "Correct!";
        } else {
            resultEl.textContent = "Incorrect!";
            timer = timer - 5;
        
        }

        questionIndex++;
        setTimeout(updateQuestion, 1500);
    }
});



startQuizEl.addEventListener("click", startQuiz);