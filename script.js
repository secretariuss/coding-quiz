var questions = [
  {
    question: "Commonly used data types DO Not Include:",
    choices: ['string', 'booleans', 'alerts', 'numbers'],
    answer: "alerts",
  },
  {
    question: "The condition in a if/else statement is enclosed with___",
    choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
    answer: "parenthesis",
  },
  {
    question: "Arrays is JavaScript can be used to store___",
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    answer: "all of the above",
  },
  {
    question: "String values must be enclosed within ___ when beign assigned to variables.",
    choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
    answer: "quotes",
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
    answer: "console.log",
  }
];

var timerCount;
var timerCountdown = document.getElementById("timerCountdown");
var wrapper = document.querySelector('.start')
var highscores = document.querySelector('.scores');
var startButton = document.querySelector('#start-button');
var quizQuestion = document.querySelector('#questions');
var heading = document.querySelector('#heading');
var question = document.querySelector('choices');
var endScreen = document.querySelector('end-screen');
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials');
var saveScore = document.querySelector('#save-score');
var timerCount = 76;
timerCount.textContent = 76;
var questiontrack = 0;
var userScore = 0;

var results = document.getElementById("results");
var finalScore = document.getElementById("finalScore");
var initials = document.getElementById("initials");
var submitBtn = document.getElementById("submitBtn");

startButton.addEventListener("click", function () {
  wrapper.setAttribute("style", "display: none;");
  showQuestions();
  runTimer();
})

function showQuestions() {
  quizQuestion.setAttribute("class", "");
  heading.textContent = questions[questiontrack].question
  for (var i = 0; i < questions[questiontrack].choices.length; i++) {
    var btn = document.createElement('button');
    btn.textContent = questions[questiontrack].choices[i];
    choices.appendChild(btn);
    btn.setAttribute("id", "choice" + i)
  }
}

choices.addEventListener("click", function (event) {
  var answer;
  if (event.target.closest('button')) {
    var selected = event.target.textContent;
    for (var i = 0; i < questions[questiontrack].answer.length; i++) {
      answer = questions[questiontrack].answer;
    }
    if (selected === answer) {
      userScore += 10;
      correct();
      nextQuestion();
    } else {
      timerCount -= 10;
      wrong();
      nextQuestion();
    }
  }
});

function nextQuestion() {
  for (var i = 0; i < questions[questiontrack].choices.length; i++) {
    var buttonChosen = document.querySelector('#choice' + i);
    buttonChosen.textContent = questions[questiontrack].choices[i];
  }
  heading.textContent = questions[questiontrack].question;
  questiontrack++;
}

function runTimer() {
  var countDown = setInterval(function () {
    timerCountdown.textContent = timerCount;
    timerCount--;

    if (timerCount == 0) {
      clearInterval(countDown);
      timerCount.textContent = 60

    }
  }, 1000)
}

function wrong() {
  saveScore.textContent = "Wrong!"
  saveScore.setAttribute("class", "")
}

function correct() {
  saveScore.textContent = "Correct!"
  saveScore.setAttribute("class", "")
}